import { IEvent } from "../interfaces/IEvent";
import { Event } from "../models/event.model";
import { ApiError } from "../utils/ApiError";

export class EventService {
    async createEvent(evenData:IEvent){
        try {
            const responsedata=await Event.create(evenData)
            if(responsedata){
                return {status:true,statusCode:200,content:"EVENT CREATED SUCCESSFULLY"}
            }
            else{
                throw new ApiError(500,"ERROR IN EVENT CREATION")
            }
        } catch (error:any) {
            return {status:false,statusCode:error.statusCode || 500,content:error.message}              
        }
    }
    async updateEvent(eventId:string,eventData:IEvent){
        try {
            const response=await Event.findByIdAndUpdate(eventId,eventData)
            if(response){
                return {status:true,statusCode:200,content:"EVENT UPDATED SUCCESFULLY"}
            }else{
                throw new ApiError(500,"ERROR IN UPDATING EVENT")
            }   
        } catch (error:any) {
            return {status:false,statusCode:error.statusCode || 500,content:error.message}
        }
    }
    async deleteEvent(eventId:string){
        try {
            const response=await Event.findByIdAndDelete(eventId)
            if(response){
                return {status:true,statusCode:200,content:"Event DELETED SUCCESFULLY"}
            }else{
                throw new ApiError(500,"ERROR IN DELETING Event")
            }   
        } catch (error:any) {
            return {status:false,statusCode:error.statusCode || 500,content:error.message}
        }
    }
    async getEvents(){
        try {
            const response=await Event.aggregate([
                {
                  $lookup: {
                    from: "registers",
                    localField: "_id",
                    foreignField: "eventId",
                    as: "eventDetails"
                  }
                },
                {
                  $addFields: {
                    totalUser: {
                      $size: "$eventDetails"
                    }
                  }
                }
              ])
            if(response){
                return {status:true,statusCode:200,content:response,length:response.length}
            }else{
                throw new ApiError(500,"ERROR IN GETTING Event")
            }   
        } catch (error:any) {
            return {status:false,statusCode:error.statusCode || 500,content:error.message}
        }
    }
    async getEventById(eventId:string){
        try {
            const response=await Event.findById(eventId)
            if(response){
                return {status:true,statusCode:200,content:response}
            }else{
                throw new ApiError(500,"ERROR IN GETTING Event")
            }   
        } catch (error:any) {
            return {status:false,statusCode:error.statusCode || 500,content:error.message}
        }
    }
    
}