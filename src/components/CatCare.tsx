import React from "react";
import {fetchCat} from "../thunk/catThunk";
import {AppDispatch} from "../store/store";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";

export const CatCare: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const cat = useAppSelector(state => state.cat)

  function handleClick() {
    dispatch(fetchCat())
  }

  return (
    <div>
      {cat.meta.isLoading && <div>LOADING...</div>}
      {cat.meta.error.hasError && <div>Couldn't load cat: {cat.meta.error.message}</div>}
      {cat.cats?.currentCat && <div>
          <img alt='cat' src={cat.cats.currentCat.image}/>
          <div>This cat is called ${cat.cats.currentCat.name} and she is hungry</div>
      </div>}
      <button type="button" onClick={handleClick}>Ccccc..</button>
    </div>
  )
}