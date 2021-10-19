import { Router } from "express";

import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateMessageController } from "../controllers/CreateMessageController";
import { GetLastTreeMessagesController } from "../controllers/GetLastTreeMessagesController";
import { ProfileUserController } from "../controllers/ProfileUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
/**
 *  o metodo chamado recebe req e res
 *  como foi chamado dentro da rota ele funciona como middleware
 *  por isso nao precisa passar no handle
 **/


const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);
router.post('/messages', ensureAuthenticated ,new CreateMessageController().handle);
router.get('/profile', ensureAuthenticated ,new ProfileUserController().handle);
router.get('/messages/last3', ensureAuthenticated ,new GetLastTreeMessagesController().handle);
 
export {router};