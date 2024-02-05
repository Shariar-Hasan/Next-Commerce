import { createSlice } from "@reduxjs/toolkit";
const get = (name) => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage?.getItem(name));
  }
};
const set = (name, item) => {
  if (typeof window !== "undefined") {
    localStorage?.setItem(name, JSON.stringify(item));
  }
};
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: get("isDark") !== null ? get("isDark") : false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      if (!state.isDark) {
        document.body.classList.remove("dark");
      } else {
        document.body.classList.add("dark");
      }
      set("isDark", state.isDark);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
