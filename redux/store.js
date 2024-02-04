import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./slices/themeSlice";
import { cartSlice } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    cart: cartSlice.reducer,
  },
});
