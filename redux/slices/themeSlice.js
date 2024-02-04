// slice for switching theme between light mode to dark and vice versa. the state will be isdark {true or false value,}  and it will throw reducer action to toggle body class "dark" add or remove accoding to user btuton click

import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: localStorage.getItem("isDark") || false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      if (state.isDark) {
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
