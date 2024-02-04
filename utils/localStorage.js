export const get = (name) => {
  if (localStorage) return JSON.parse(localStorage?.getItem(name));
};
export const set = (name, item) => {
  localStorage?.setItem(name, JSON.stringify(item));
};
