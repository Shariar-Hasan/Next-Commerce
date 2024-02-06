import { BASE_URL } from "../contants";

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/api/products/`, {
    next: {
      revalidate: 3600,
    },
  });
  const result = await res.json();
  return result;
};
export const getSingleProduct = async (slug) => {
  const res = await fetch(`${BASE_URL}/api/products/${slug}`, {
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
