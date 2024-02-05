export const getProducts = async () => {
  const res = await fetch(`${process.env.FETCH_URL}/api/products/`, {
    cache: "force-cache",
    next: {
      revalidate: 3600,
    },
  });
  const result = await res.json();
  return result;
};
export const getSingleProduct = async (slug) => {
  const res = await fetch(`${process.env.FETCH_URL}/api/products/${slug}`, {
    cache: "force-cache",
    next: {
      revalidate: 3600,
    },
  });
  const result = await res.json();
  if (!result.success) {
    throw new Error(result.message);
  }
  return result;
};
