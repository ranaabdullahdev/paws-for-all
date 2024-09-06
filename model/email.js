import mongoose, { Schema } from "mongoose";




const email = new Schema({

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
   
  },
});
const EmailModel = mongoose.model("Email", email);

export default EmailModel;
