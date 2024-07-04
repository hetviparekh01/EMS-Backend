import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import authMiddleware from "../middlewares/auth.middleware";

const userRoute=Router()
const userController=new UserController()
userRoute.post('/signup',userController.signUp)
userRoute.post('/login',userController.login)
userRoute.post('/updateuser/:id',authMiddleware,userController.updateUser)
userRoute.delete('/deleteuser/:id',authMiddleware,userController.deleteUser)
export default userRoute    