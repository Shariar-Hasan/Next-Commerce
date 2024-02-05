import { NextResponse } from "next/server";
import dataJson from "./data.json";
export const GET = (req) => {
  return NextResponse.json({
    success: true,
    data: dataJson,
  });
};
