import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  age: number;
  email: string;
}

const userInitialState: UserState = {
  name: '',
  age: 0,
  email: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    login(
      state: UserState,
      action: PayloadAction<UserState>
    ) {
      state = action.payload;
    }
  }
})

export const {
  login
} = userSlice.actions
export const {reducer: userReducer} = userSlice