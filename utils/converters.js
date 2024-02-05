export const numToBdt = (num = 0) => {
  return num.toLocaleString("bn-bd", {
    style: "currency",
    currency: "BDT",
  });
};

export const hypenBreakerStringMaker = (string = "") => {
  const nonHypenArray = string.split("-");
  return nonHypenArray.map((item) => capitalize(item)).join(" ");
};


export const capitalize = (string = "") => {
  return string[0].toUpperCase() + string.slice(1, string.length);
};
