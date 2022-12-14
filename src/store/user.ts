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
      // https://www.youtube.com/watch?v=k68j9xlbHHk&t=597s
      state.age = action.payload.age;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logout(state: UserState){
      state.name = userInitialState.name
      state.age = userInitialState.age
      state.email = userInitialState.email
    }
  }
})

export const {
  login,
  logout
} = userSlice.actions
export const {reducer: userReducer} = userSlice