export const get = (name) => {
  return JSON.parse(localStorage?.getItem(name));
};
export const set = (name, item) => {
  return localStorage?.setItem(name, JSON.stringify(item));
};
