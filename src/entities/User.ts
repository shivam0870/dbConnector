import mongoose from "mongoose";
import { IUser } from "./IUser";

const userSchema = new mongoose.Schema<IUser>({
    userId: String,
    email: String
})

const User = mongoose.model('User',userSchema);

export{User};