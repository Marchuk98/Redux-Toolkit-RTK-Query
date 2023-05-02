import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from "./favorites/favorites.slice.js";
import {userSlice} from "./user/user.slice.js";
import {api} from "./api/api.js";
import {createLogger} from "redux-logger";


const logger = createLogger({
    collapsed:true
})

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    user:userSlice.reducer,
    [api.reducerPath]: api.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware).concat(logger)
});