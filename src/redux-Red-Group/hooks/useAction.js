import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from '../sotre/favourites/favourites.slice';
import * as userAction from '../sotre/user/user.actions'

const rootActions = {
    ...actions,
    ...userAction,
}

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}