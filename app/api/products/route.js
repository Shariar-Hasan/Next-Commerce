import { NextResponse } from "next/server";
import dataJson from "./data.json";
export const GET = async (req) => {
  return NextResponse.json({
    success: true,
    data: dataJson,
  });
};
