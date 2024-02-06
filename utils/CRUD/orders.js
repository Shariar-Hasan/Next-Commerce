import { BASE_URL } from "../contants";

export const createNewOrder = async (orderData) => {
  const result = await fetch(`${BASE_URL}/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  console.log({BASE_URL});
  const data = await result.json();
  return data;
};
