import { combineReducers } from '@reduxjs/toolkit'
import {userReducer} from "./user";

export const makeRootReducer = () => {
  const baseReducers = {
    userReducer
  }

  return combineReducers(baseReducers)
}