import {Request, Response} from 'express';
import { GetLastTreeMessagesServices } from '../services/GetLastTreeMessagesServices';



class GetLastTreeMessagesController {
    async handle (req:Request, res:Response) {
        const service = new GetLastTreeMessagesServices();
        const result = await service.execute();
        return res.json(result);
    }
}
export {GetLastTreeMessagesController}