import dataJson from "./../data.json";
export const GET = (req, { params }) => {
  const { slug: pSlug } = params;
  const data = dataJson.find(({ slug }) => pSlug === slug);
  if (data) {
    return Response.json({
      success: true,
      data: data,
    });
  }
  else{
    return Response.json({
      success: false,
      message: "Product not found"
    })
  }
};
