import mongoose, { Schema } from "mongoose";
import { IEvent } from "../interfaces/IEvent";

const EventSchema=new Schema<IEvent>({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    location:{
        type:String,
        required:[true,"loaction is required"],
       
    },
    description:{
        type:String,
        required:[true,"desription is required"],
    
    },  
    fees:{
        type:Number,
        required:[true,"fees is required"],
    },
    date:{
        type:Date,
        required:[true,"date is required"]
    }
})

export const Event=mongoose.model("event",EventSchema)