import { NextResponse } from "next/server";

export const POST = async (req) => {
  const data = await req.json();
  console.log(data);
  // logic for services and database
  data.createdAt = Date.now();
  data.id = Date.now();
  return NextResponse.json({
    success: true,
    data: data,
  });
};
