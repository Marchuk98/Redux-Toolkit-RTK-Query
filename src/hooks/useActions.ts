import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import * as userActions from '../store/user/user.action'
import {getUserById} from "../store/user/user.action";
import {actions} from "../store/favorites/favorites.slice";

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