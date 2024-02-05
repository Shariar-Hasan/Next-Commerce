import { NextResponse } from "next/server";
import dataJson from "./../data.json";
export const GET = async (req, { params }) => {
  const { slug: pSlug } = params;
  const data = dataJson.find(({ slug }) => pSlug === slug);
  if (data) {
    return NextResponse.json({
      success: true,
      data: data,
    });
  }
  else{
    return NextResponse.json({
      success: false,
      message: "Product not found"
    })
  }
};
