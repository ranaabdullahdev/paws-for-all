import mongoose, { Schema } from "mongoose";




const emailSchema = new Schema({

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
   
  },
});
// Check if the model is already compiled
const Email = mongoose.models.Email || mongoose.model("Email", emailSchema);


export default Email;
