import { combineReducers } from '@reduxjs/toolkit'
import {userReducer} from "./user.reducer";
import {themeReducer} from "./theme.reducer";
import {catReducer} from "./cat.reducer";

export const makeRootReducer = () => {
  const baseReducers = {
    user: userReducer,
    theme: themeReducer,
    cat: catReducer
  }

  return combineReducers(baseReducers)
}

export const rootReducer = makeRootReducer();
export type AppRootState = ReturnType<typeof rootReducer>