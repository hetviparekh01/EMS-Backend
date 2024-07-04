import mongoose, { ObjectId } from "mongoose";
import { IRegister } from "../interfaces/IRegister";
import { Register } from "../models/register.model";
import { ApiError } from "../utils/ApiError";

export class RegisterService {
    async register(registerData:IRegister){
        try {
            const responsedata=await Register.create(registerData)
            if(responsedata){
                return {status:true,statusCode:200,content:"EVENT REGISTERED SUCCESSFULLY"}
            }
            else{
                throw new ApiError(500,"ERROR IN EVENT REGISTRATION")
            }
        } catch (error:any) {
            return {status:false,statusCode:error.statusCode || 500,content:error.message}              
        }
    }
    async getRegisterEvents(){
        try {
            const responsedata=await Register.find({})
            if(responsedata){
                return {status:true,statusCode:200,content:responsedata,length:responsedata.length}
            }
            else{
                throw new ApiError(500,"ERROR IN GETTING EVENT")
            }
        } catch (error:any) {
            return {status:false,statusCode:error.statusCode || 500,content:error.message}              
        }
    }
    async getRegisterEventByUserId(userId:ObjectId){
        try {
            const newUserId=userId.toString();
            console.log(newUserId);
            const responsedata=await Register.aggregate([
                {
                  $lookup: {
                    from: "events",
                    localField: "eventId",
                    foreignField: "_id",
                    as: "eventDetails"
                  }
                },
                {
                  $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "userDetails"
                  }
                },
                {
                  $unwind: {
                    path: "$eventDetails",
                  }
                },
                {
                  $unwind: {
                    path: "$userDetails",
                  }
                },
                {
                  $match:{
                    userId:new mongoose.Types.ObjectId(newUserId)
                  }
                },
                {
                    $project:{
                      eventDetails:1,
                      userDetails:1
                    }
                }
              ])
            if(responsedata){
                return {status:true,statusCode:200,content:responsedata}
            }
            else{
                throw new ApiError(500,"ERROR IN GETTING EVENT")
            }
        } catch (error:any) {
            return {status:false,statusCode:error.statusCode || 500,content:error.message}              
        }
    }
    
}