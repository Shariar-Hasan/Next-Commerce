export const createNewOrder = async (orderData) => {
  const result = await fetch(`http://localhost:3000/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });
  const data = await result.json();
  return data;
};
