import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppMeta {
  isLoading: boolean;
  error: {
    hasError: boolean;
    message: string;
  };
}

export interface Cat {
  id: number;
  name: string;
  image: string;
  isFed: boolean;
}

interface CatState {
  meta: AppMeta;
  categories: {
    stray: Cat | null;
    adopted: Cat[];
  };
}

const catInitialState: CatState = {
  meta: {
    isLoading: false,
    error: {
      hasError: false,
      message: "",
    },
  },
  categories: {
    stray: null,
    adopted: [],
  },
};

export const catSlice = createSlice({
  name: "cat",
  initialState: catInitialState,
  reducers: {
    loadRandomCat(state) {
      state.meta.isLoading = true;
      state.categories.stray = null;
    },
    showCurrentCat(state, action: PayloadAction<Cat>) {
      state.meta.isLoading = false;
      state.categories.stray = action.payload;
    },
    catLoadFailed(state, action: PayloadAction<string>) {
      state.meta.isLoading = false;
      state.meta.error.hasError = true;
      state.meta.error.message = action.payload;
    },
    feedCat(state) {
      if (state.categories.stray) {
        state.categories.stray.isFed = true;
      }
    },
    adoptCat(state) {
      if (state.categories.stray) {
        state.categories.adopted.push(state.categories.stray);
        state.categories.stray = null;
      }
    },
  },
});

export const {
  loadRandomCat,
  showCurrentCat,
  catLoadFailed,
  feedCat,
  adoptCat,
} = catSlice.actions;
export const { reducer: catReducer } = catSlice;
