import dataJson from "./../data.json";
export const GET = (req, { params }) => {
  const { slug: pSlug } = params;
  const data = dataJson.find(({ slug }) => pSlug === slug);
  return Response.json({
    success: true,
    data: data,
  });
};
