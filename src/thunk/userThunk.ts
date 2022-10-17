import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppRootState } from "../store/reducers";
import { AppDispatch } from "../store/store";

export const fetchTodoByCatId = createAsyncThunk<
  {
    // action.payload
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  },
  number, // input arg
  {
    dispatch: AppDispatch;
    state: AppRootState;
  }
>("cat/fetchCatTodoById", async (catId, thunkAPI) => {
  console.log(thunkAPI.getState()); // store
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${catId}`
  );
  return await response.json();
});
