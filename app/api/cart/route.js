import { NextResponse } from "next/server";
import cartjson from "./data.json";
export const GET = (req) => {
    const searchParams = request.nextUrl.searchParams
    return NextResponse.json({
        success: true,
        data: "Temp Data",
    })
};
