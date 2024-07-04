import { ObjectId } from "mongoose";

export interface IRegister{
    eventId:ObjectId,
    userId?:ObjectId
}