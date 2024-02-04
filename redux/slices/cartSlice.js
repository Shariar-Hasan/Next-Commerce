import { get, set } from "@/utils/localStorage";
import { createSlice } from "@reduxjs/toolkit";

const localStoreNames = {
  cart: "cart",
  cartTotalPrice: "cartTotalPrice",
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: get(localStoreNames.cart) || [],
    totalPrice: get(localStoreNames.cartTotalPrice) || 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      let { product } = payload;
      // check if the product is already in the cart
      const isAlreadyInCart = state.cartItems.find(
        (item) => item.id === product.id
      );
      console.log({ state, tp: state.totalPrice });
      if (isAlreadyInCart) {
        const newCartItems = state.cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        const newTotalPrice =
          state.totalPrice +
          (product.discountPrice
            ? product.discountPrice
            : product.regularPrice);
        console.log({ newCartItems, newTotalPrice });
        // setting in local storage and in state
        set(localStoreNames.cart, newCartItems);
        set(localStoreNames.cartTotalPrice, newTotalPrice);
        return {
          ...state,
          cartItems: newCartItems,
          totalPrice: newTotalPrice,
        };
      } else {
        product = { ...product, quantity: 1 };
        const newCartItems = [...state.cartItems, product];
        const newTotalPrice =
          state.totalPrice +
          (product.discountPrice
            ? product.discountPrice
            : product.regularPrice);

        // setting in local storage and in state
        set(localStoreNames.cart, newCartItems);
        set(localStoreNames.cartTotalPrice, newTotalPrice);
        return {
          ...state,
          cartItems: newCartItems,
          totalPrice: newTotalPrice,
        };
      }
    },
    removeFromCart: (state, { payload }) => {
      const { product } = payload;
      const cartProduct = state.cartItems.find(
        (item) => item.id === product.id
      );
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== product.id
      );
      const newTotalPrice =
        state.totalPrice -
        cartProduct.quantity *
          (product.discountPrice
            ? product.discountPrice
            : product.regularPrice);

      // setting in local storage and in state
      set(localStoreNames.cart, newCartItems);
      set(localStoreNames.cartTotalPrice, newTotalPrice);
      return {
        ...state,
        cartItems: newCartItems,
        totalPrice: newTotalPrice,
      };
    },
    // updateQuantity: (state, { payload }) => {
    //   const { id, quantity } = payload;
    //   const isLastElement = false;
    //   if (quantity < 0) {
    //     isLastElement =
    //       state.cartItems.find((item) => item.id === product.id).quantity === 1;
    //       if()
    //   }

    //   return {
    //     cartItems: state.cartItems.map((item) =>
    //       item.id === product.id
    //         ? { ...item, quantity: item.quantity + 1 }
    //         : item
    //     ),
    //     totalPrice: state.totalPrice + product.price,
    //   };
    // },
    incrementQuantity: (state, { payload }) => {
      const { product } = payload;
      const newCartItems = state.cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      const newTotalPrice =
        state.totalPrice +
        (product.discountPrice ? product.discountPrice : product.regularPrice);

      // setting in local storage and in state
      set(localStoreNames.cart, newCartItems);
      set(localStoreNames.cartTotalPrice, newTotalPrice);
      return {
        ...state,
        cartItems: newCartItems,
        totalPrice: newTotalPrice,
      };
    },

    decrementQuantity: (state, { payload }) => {
      const { product } = payload;
      const isLastElement =
        state.cartItems.find((item) => item.id === product.id).quantity === 1;
      if (isLastElement) {
        const newCartItems = state.cartItems.filter(
          (item) => item.id !== product.id
        );
        const newTotalPrice =
          state.totalPrice -
          (product.discountPrice
            ? product.discountPrice
            : product.regularPrice);

        // setting in local storage and in state
        set(localStoreNames.cart, newCartItems);
        set(localStoreNames.cartTotalPrice, newTotalPrice);
        return {
          ...state,
          cartItems: newCartItems,
          totalPrice: newTotalPrice,
        };
      } else {
        const newCartItems = state.cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        const newTotalPrice =
          state.totalPrice -
          (product.discountPrice
            ? product.discountPrice
            : product.regularPrice);

        // setting in local storage and in state
        set(localStoreNames.cart, newCartItems);
        set(localStoreNames.cartTotalPrice, newTotalPrice);
        return {
          ...state,
          cartItems: newCartItems,
          totalPrice: newTotalPrice,
        };
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
