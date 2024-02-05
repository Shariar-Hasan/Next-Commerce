import dataJson from "./data.json";
export const GET = (req) => {

    return Response.json({
      success: true,
      data: dataJson,
    });
};
