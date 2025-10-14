import { dbConfig } from "@/app/utils/dbConfig";
import myUserModel from "@/app/utils/Model/userModel";
import { Request } from "express";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,

  { params }
) => {
  try {
    await dbConfig();
    const { userID } = await params;
    const user = await myUserModel.findById(userID);
    if (user) {
      const getD = await myUserModel.findByIdAndUpdate(
        userID,
        { verify: true },
        { new: true }
      );
      return NextResponse.json({
        message: "User Verified",
        status: 200,
        data: getD,
      });
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
