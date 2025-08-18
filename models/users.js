import mongoose from "mongoose";
import { use } from "react";
const schema = new mongoose.Schema({
    name: { type: String, required: false },
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    image: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
const User = mongoose.models.User || mongoose.model("User", schema);
export default User;