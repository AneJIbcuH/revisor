import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlbumPhotos } from "../models/models";

type FavoritesState = {
  favorites: AlbumPhotos[];
};

const initialState: FavoritesState = {
    favorites: []
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addPhoto(state, action: PayloadAction<AlbumPhotos>) {
      state.favorites.push(action.payload);
    },
    deletePhoto(state, action: PayloadAction<AlbumPhotos>) {
      state.favorites = state.favorites.filter((photo) => photo.id !== action.payload.id);
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;