import { combineReducers } from '@reduxjs/toolkit'
import {userReducer} from "./user";
import {themeReducer} from "./theme";

export const makeRootReducer = () => {
  const baseReducers = {
    user: userReducer,
    theme: themeReducer
  }

  return combineReducers(baseReducers)
}

export const rootReducer = makeRootReducer();
export type AppRootState = ReturnType<typeof rootReducer>