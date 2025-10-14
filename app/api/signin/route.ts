import { dbConfig } from "@/app/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import myUserModel from "@/app/utils/Model/userModel";
import Error from "next/error";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await dbConfig();
    const { email, password } = await req.json();
    const user = await myUserModel.findOne({ email });
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      if (passCheck) {
        return NextResponse.json({
          message: "Login Successful",
          status: 200,
          data: user,
        });
      } else {
        return NextResponse.json({
          message: "Incorrect Password",
          status: 400,
        });
      }
    } else {
      return NextResponse.json({ message: "User not found", status: 400 });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
    });
  }
};
