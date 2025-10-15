import { dbConfig } from "@/app/utils/dbConfig";
import myUserModel from "@/app/utils/Model/userModel";
import { Request } from "express";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  res: NextResponse,

  { params }: any
) => {
  try {
    await dbConfig();
    const { userID } = await params;
    const { token } = await req.json();
    const user = await myUserModel.findById(userID);
    if (user) {
      const tokenCheck = user.token === token;
      if (tokenCheck) {
        const getD = await myUserModel.findByIdAndUpdate(
          userID,
          { verify: true, token: "" },
          { new: true }
        );
        return NextResponse.json({
          message: "User Verified",
          status: 200,
          data: getD,
        });
      } else {
        return NextResponse.json({
          message: "Incorrect Token",
          status: 400,
        });
      }
    } else {
      return NextResponse.json({
        message: "User Not Found",
        status: 400,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
    });
  }
};
