import { IEvent } from "../interfaces/IEvent";
import { Request, Response } from "express";
import { RegisterService } from "../services/register.service";
const registerServcie = new RegisterService();
export class RegisterController {
  async registerEvent(req: Request, res: Response) {
    try {
        const registerData = req.body;
        const userId=req.user.userId;
        registerData.userId=userId
        const response = await registerServcie.register(registerData);
      if (response.status) {
        return res
          .status(response.statusCode)
          .json({ status: response.status, content: response.content });
      } else {
        return res
          .status(response.statusCode)
          .json({ status: false, content: response.content });
      }
    } catch (error: any) {
      return res
        .status(error.statusCode)
        .json({ status: false, content: error.message });
    }
  }
  async getRegisterEvents(req: Request, res: Response){
    try {
      const response = await registerServcie.getRegisterEvents();
      if (response.status) {
        return res
          .status(response.statusCode)
          .json({ status: response.status, content: response.content,length:response.length });
      } else {
        return res
          .status(response.statusCode)
          .json({ status:  response.status, content: response.content });
      }
    } catch (error: any) {
      return res
        .status(error.statusCode)
        .json({ status: false, content: error.message });
    }
  }
  async getRegisterEventByUserId(req: Request, res: Response){
    try {
      const userId=req.user.userId
      const response = await registerServcie.getRegisterEventByUserId(userId);
      if (response.status) {
        return res
          .status(response.statusCode)
          .json({ status: response.status, content: response.content,length:response.content.length });
      } else {
        return res
          .status(response.statusCode)
          .json({ status:  response.status, content: response.content });
      }
    } catch (error: any) {
      return res
        .status(error.statusCode)
        .json({ status: false, content: error.message });
    }
  }
}