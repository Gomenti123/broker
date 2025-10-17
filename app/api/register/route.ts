import { dbConfig } from "@/app/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import myUserModel from "@/app/utils/Model/userModel";
import { sendEmail } from "@/app/utils/email";

// export const POST = async (req: NextRequest, res: NextResponse) => {
//   try {
//     await dbConfig();
//     const { name, email, password, phoneNumber } = await req.json();
//     const salt = await bcrypt.genSalt(10);
//     const hashed = await bcrypt.hash(password, salt);
//     const token = Math.floor(100000 + Math.random() * 900000);

//     // console.log(token);

//     const getD = await myUserModel.create({
//       name,
//       email,
//       password: hashed,
//       phoneNumber,
//       token,
//     });
//     sendEmail(getD);
//     return NextResponse.json({
//       message: "User Created",
//       status: 200,
//       data: getD,
//     });
//   } catch (error: any) {
//     // eslint-disable-line @typescript-eslint/no-explicit-any
//     return NextResponse.json({
//       message: "Error Occured",
//       status: 400,
//       error: error.message,
//     });
//   }
// };

export const GET = async () => {
  try {
    await dbConfig();
    const getD = await myUserModel.find();
    return NextResponse.json({
      message: "Users Found",
      status: 200,
      data: getD,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
    });
  }
};
