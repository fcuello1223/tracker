import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, "User E-Mail is required"],
      trim: true,
      unique: true,
      lowercase: true,
      minLength: 5,
      maxLength: 100,
      match: [/\S+@\S+\.\S+/, "Please Enter A Valid E-Mail Address"],
    },
    password: {
      type: String,
      required: [true, "A Password Is Required"],
      minLength: 7,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
