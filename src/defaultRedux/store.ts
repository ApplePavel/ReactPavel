import {createStore, combineReducers} from "redux";
import { countReducer } from "./count.reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = createStore(
    combineReducers({
            count: countReducer
        }
    )
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector