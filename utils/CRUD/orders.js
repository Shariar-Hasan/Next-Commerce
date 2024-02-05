export const createNewOrder = async (orderData) => {
  const result = await fetch(`${process.env.FETCH_URL}/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

    console.log(process.env.FETCH_URL)
  const data = await result.json();
  return data;
};
