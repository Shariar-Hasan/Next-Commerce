import { rootURL } from "../contants";

export const createNewOrder = async (orderData) => {
  const result = await fetch(`${rootURL}/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

    console.log(process.env.NEXT_PUBLIC_FETCH_URL)
  const data = await result.json();
  return data;
};
