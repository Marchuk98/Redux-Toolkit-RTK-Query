import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from "./favorites/favorites.slice.js";

const rootReducer = combineReducers({
    favorites: favoritesReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});