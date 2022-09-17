import mongoose from "mongoose";

const User = mongoose.Schema({
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String, required: true
    }
})

const UserModel = mongoose.model("user", User, "users");
export default UserModel