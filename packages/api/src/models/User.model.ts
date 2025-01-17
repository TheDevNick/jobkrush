import mongoose, { Schema } from "mongoose";
import validator from "validator";
import { UserDocument } from "../types/user.types";

const UserSchema = new Schema<UserDocument>({
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  avatar: {
    type: String,
  },
  isEmailVerified: {
    type: Boolean,
  },
  firstName: {
    type: String,
    required: [true, "Please provide name"],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    maxLength: 20,
    default: "Last Name",
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "Please provide a valid email",
    },

    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: 6,
    select: false,
  },
  location: {
    type: String,
    maxLength: 20,
    default: "My city",
    trim: true,
  },
  provider: {
    type: String,
    enum: ["local", "google"],
    default: "local",
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
