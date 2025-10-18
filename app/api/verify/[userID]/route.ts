import { dbConfig } from "@/app/utils/dbConfig";
import myUserModel from "@/app/utils/Model/userModel";
import { Request } from "express";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID } = await params;
    const token = await req.json();
    // console.log(userID);
    // console.log(token);

    const user = await myUserModel.findById(userID);
    // console.log(getD.token);

    if (user) {
      const checkIfVerified = user.verify === true;
      if (!checkIfVerified) {
        const tokenCheck = token.token === user.token;
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
            message: "Incorrect token",
            status: 400,
          });
        }
      } else {
        return NextResponse.json({
          message: "Account already verified",
          status: 400,
        });
      }
    } else {
      return NextResponse.json({
        message: "User not found",
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
