import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from "src/store/favorites/favorites.slice";
import {userSlice} from "src/store/user/user.slice";
import {api} from "src/store/api/api";
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