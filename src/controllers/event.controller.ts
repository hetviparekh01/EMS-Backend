import { IEvent } from "../interfaces/IEvent";
import { EventService } from "../services/event.service";
import { Request, Response } from "express";
const eventServcie = new EventService();
export class EventController {
  async createEvent(req: Request, res: Response) {
    try {
        const eventData = req.body;
        const response = await eventServcie.createEvent(eventData);
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
  async updateEvent(req: Request, res: Response){
    try {
      const eventData: IEvent = req.body;
      const eventId:string=req.params.id
      const response = await eventServcie.updateEvent(eventId,eventData);
      if (response.status) {
        return res
          .status(response.statusCode)
          .json({ status: response.status, content: response.content });
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
  async deleteEvent(req: Request, res: Response){
    try {
      const eventId:string=req.params.id
      const response = await eventServcie.deleteEvent(eventId);
      if (response.status) {
        return res
          .status(response.statusCode)
          .json({ status: response.status, content: response.content });
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
  async getEvents(req: Request, res: Response){
    try {
      const response = await eventServcie.getEvents();
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
  async geteventById(req: Request, res: Response){
    try {
      const eventId=req.params.id
      const response = await eventServcie.getEventById(eventId);
      if (response.status) {
        return res
          .status(response.statusCode)
          .json({ status: response.status, content: response.content });
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