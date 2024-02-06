import { NextResponse } from "next/server";
import dataJson from "./../data.json";
export const GET = async (req, { params }) => {
  const { slug: pSlug } = params;
  const data = dataJson.find(({ slug }) => pSlug === slug);
  if (data) {
    return new Response(
      JSON.stringify({
        success: true,
        data: data,
      }),
      { status: 200 }
    );
  } else {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Product not found",
      }),
      { status: 200 }
    );
  }
};
