import { get } from "@/utils/localStorage";
import { createSlice } from "@reduxjs/toolkit";

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
      localStorage.setItem("isDark", state.isDark);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.isDark;
