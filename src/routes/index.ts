
import { Router } from "express";
import userRoute from "./user.routes";
import eventRoute from "./event.routes";
import authMiddleware from "../middlewares/auth.middleware";
import registerRoute from "./register.routes";

const route=Router()

route.use('/user',userRoute);
route.use('/event',authMiddleware,eventRoute);
route.use('/register',authMiddleware,registerRoute)

export default route