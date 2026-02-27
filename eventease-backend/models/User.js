import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ["user", "provider"], required: true },
  companyName: { type: String, default: "" },
  // Optional user fields
  phone: { type: String, default: "" },
  age: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  pincode: { type: String, default: "" },
  about: { type: String, default: "" },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
