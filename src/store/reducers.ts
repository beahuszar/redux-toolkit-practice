import { combineReducers } from '@reduxjs/toolkit'
import {userReducer} from "./user";

export const makeRootReducer = () => {
  const baseReducers = {
    user: userReducer
  }

  return combineReducers(baseReducers)
}

export const rootReducer = makeRootReducer();
export type AppRootState = ReturnType<typeof rootReducer>