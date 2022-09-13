import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ThemeState {
  color: string
}

const themeInitialState: ThemeState = {
  color: ''
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: themeInitialState,
  reducers: {
    changeColor(
      state: ThemeState,
      action: PayloadAction<string>
    ) {
      state.color = action.payload
    }
  }
})

export const {
  changeColor
} = themeSlice.actions

export const {reducer: themeReducer} = themeSlice