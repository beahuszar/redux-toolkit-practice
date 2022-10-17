import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../store/reducers";
import {AppDispatch} from "../store/store";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector