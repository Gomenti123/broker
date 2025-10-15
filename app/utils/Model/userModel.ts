import { model, models, Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const userModel = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    phoneNumber: { type: Number, require: true },
    verify: { type: Boolean, default: false },
    token: { type: String },
  },
  { timestamps: true }
);

const myUserModel = models.users || model("users", userModel);

export default myUserModel;
