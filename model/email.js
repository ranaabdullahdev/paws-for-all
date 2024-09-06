import mongoose, { Schema, Document } from "mongoose";




const email = new Schema({

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please use a valid email address"],
  },
});
const UserModel = mongoose.model("Email", email);

export default UserModel;
