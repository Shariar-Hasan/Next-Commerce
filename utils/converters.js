export const numToBdt = (num = 0) => {
  return num.toLocaleString("bn-bd", {
    style: "currency",
    currency: "BDT",
  });
};
