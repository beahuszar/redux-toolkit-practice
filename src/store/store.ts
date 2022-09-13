import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducers";
import logger from "redux-logger"
import {ThunkExtraArgument} from "../thunk/catThunk";

const extraArgument: ThunkExtraArgument = {
  imageRoot: "https://robohash.org/",
  nameRoot: "https://jsonplaceholder.typicode.com/users/"
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument
      },
    }).concat(logger)
})

export type AppDispatch = typeof store.dispatch

export default store;