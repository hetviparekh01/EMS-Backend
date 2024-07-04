import mongoose, { Schema } from "mongoose";
import { IRegister } from "../interfaces/IRegister";

const RegisterSchema=new Schema<IRegister>({
    eventId:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"eventid is required"],
        ref:"event"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
})

export const Register=mongoose.model("register",RegisterSchema)