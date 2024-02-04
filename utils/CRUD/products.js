import toast from "react-hot-toast";

export const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products/", {
      cache: "no-cache",
    });
    const result = await res.json();
    return result;
  } catch (err) {
    toast.error(err.message);
  }
};
export const getSingleProduct = async (slug) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${slug}`, {
      cache: "default",
    });
    const result = await res.json();
    
    return result;
  } catch (err) {
    console.log(err.message);
  }
};
