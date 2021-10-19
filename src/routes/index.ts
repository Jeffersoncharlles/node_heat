import { Router } from "express";

import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateMessageController } from "../controllers/CreateMessageController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
/**
 *  o metodo chamado recebe req e res
 *  como foi chamado dentro da rota ele funciona como middleware
 *  por isso nao precisa passar no handle
 **/


const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);
router.post('/message',ensureAuthenticated,new CreateMessageController().handle);

export {router};