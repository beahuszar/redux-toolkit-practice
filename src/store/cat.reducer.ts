import {AnyAction, createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppMeta {
  isLoading: boolean;
  error: {
    hasError: boolean;
    message: string;
  }
}

export interface Cat {
  id: number;
  name: string;
  image: string;
  isFed: boolean;
}

interface CatState {
  meta: AppMeta;
  cats: {
    currentCat: Cat | null;
    fedCats: Cat[]
  };
}

const catInitialState: CatState = {
  meta: {
    isLoading: false,
    error: {
      hasError: false,
      message: ''
    }
  },
  cats: {
    currentCat: null,
    fedCats: []
  }
}

export const catSlice = createSlice({
  name: 'cat',
  initialState: catInitialState,
  reducers: {
    loadRandomCat(state) {
      state.meta.isLoading = true
      state.cats.currentCat = null
    },
    showCurrentCat(state, action: PayloadAction<Cat>) {
      state.meta.isLoading = false
      state.cats.currentCat = action.payload
    },
    catLoadFailed(state, action: PayloadAction<string>) {
      state.meta.isLoading = false
      state.meta.error.hasError = true
      state.meta.error.message = action.payload
    }
  }
})

export const {
  loadRandomCat,
  showCurrentCat,
  catLoadFailed
} = catSlice.actions
export const {reducer: catReducer} = catSlice