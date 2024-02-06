import { NextResponse } from "next/server";
import dataJson from "./data.json";
export const GET = async (req) => {
  return new Response(JSON.stringify({
    success: true,
    data: dataJson,
  }), { status: 200 });
};
