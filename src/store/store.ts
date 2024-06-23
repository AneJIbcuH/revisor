import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { favoritesReducer } from "./testSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
