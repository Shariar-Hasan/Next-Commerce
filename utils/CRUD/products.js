
export const getProducts = async () => {
    const res = await fetch("http://localhost:3000/api/products/", {
      cache: "no-cache",
    });
    const result = await res.json();
    return result;
};
export const getSingleProduct = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/products/${slug}`, {
    cache: "default",
  });
  const result = await res.json();
  if (!result.success) {
    throw new Error(result.message);
  }
  return result;
};
