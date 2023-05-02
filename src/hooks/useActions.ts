import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actions} from "../store/favorites/favorites.slice.ts";
import * as userActions from '../store/user/user.action.ts'
import {getUserById} from "../store/user/user.action.ts";

const rootAction = {
    ...actions,
        ...userActions,
}


export const useActions = () => {
    const dispatch = useDispatch();
    const {toggleFavorites} = bindActionCreators(rootAction, dispatch);
    const {getUserById} = bindActionCreators(rootAction,dispatch)

    return useMemo(() => ({
        toggleFavorites,getUserById
    }), [toggleFavorites,getUserById]);
};