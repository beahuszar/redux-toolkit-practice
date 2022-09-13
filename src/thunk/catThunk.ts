import {Action, ThunkAction} from "@reduxjs/toolkit";
import {AppRootState} from "../store/reducers";
import {Cat, catLoadFailed, loadRandomCat, showCurrentCat} from "../store/cat.reducer";

export interface ThunkExtraArgument {
  imageRoot: string
  nameRoot: string
}

/*
* export type ThunkAction<
  R, // Return type of the thunk function
  S, // state type used by getState
  E, // any "extra argument" injected into the thunk
  A extends Action // known types of actions that can be dispatched
> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R
* */

export type CatThunk = ThunkAction<void, AppRootState, ThunkExtraArgument, Action<string>>

export function fetchCat(): CatThunk {
  return async function (dispatch, getState, extraArgument) {
    try {
      dispatch(loadRandomCat())

      const state = getState()
      const catImage = `${extraArgument.imageRoot}${Math.round(Math.random() * 5000)}?set=set4&size=100x100`
      const response = await fetch(`${extraArgument.nameRoot}?id=${Math.ceil(Math.random() * 10)}`)
      const data = await response.json()
      const cat: Cat = {
        name: data.userName,
        image: catImage,
        isFed: false,
        id: state.cat.cats.fedCats.length + 1
      }

      dispatch(showCurrentCat(cat))
    } catch (e) {
      dispatch(catLoadFailed('Did not find any cats...Try again'))
      console.log(e)
    }
  }
}