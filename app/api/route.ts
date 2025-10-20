import { NextRequest, NextResponse } from "next/server";
import { dbConfig } from "../utils/dbConfig";

export const GET = async (req: NextRequest) => {
  await dbConfig();
  return NextResponse.json({
    message: "Welcome to default Route",
    status: 200,
  });
};
