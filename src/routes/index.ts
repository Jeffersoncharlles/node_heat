import { Router } from "express";

import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
/**
 *  o metodo chamado recebe req e res
 *  como foi chamado dentro da rota ele funciona como middleware
 *  por isso nao precisa passar no handle
 **/


const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

export {router};