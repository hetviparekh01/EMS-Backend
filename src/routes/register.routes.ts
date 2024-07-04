import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import { EventController } from "../controllers/event.controller";
import { RegisterController } from "../controllers/registerController";

const registerRoute=Router()
const registerController=new RegisterController()
registerRoute.post('/registerevent',registerController.registerEvent)
registerRoute.get('/getregisterevent',registerController.getRegisterEvents)
registerRoute.get('/getuserevent',registerController.getRegisterEventByUserId)

export default registerRoute    