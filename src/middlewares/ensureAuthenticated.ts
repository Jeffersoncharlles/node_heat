import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


interface IPayload {
    sub: string
}

const ensureAuthenticated = (req:Request, res:Response, next: NextFunction) => {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({
            errorCode: "token.invalid",
        });
    }

    // Bearer token

    const [Bearer,token] = authToken.split(" ");

    try {
        const { sub } =  verify(token, process.env.JWT_SECRET_KEY) as IPayload;

        req.user_id = sub;
        return next();

    } catch (error) {
        return res.status(401).json({
            errorCode: "token.expired",
        });
    }

   
}

export {ensureAuthenticated}