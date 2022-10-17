import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { adoptCat, feedCat } from "../store/cat.reducer";
import { AppDispatch } from "../store/store";
import { fetchCat } from "../thunk/catThunk";
import { fetchTodoByCatId } from "../thunk/userThunk";

export const CatCare: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const cat = useAppSelector((state) => state.cat);

  function handleFetch() {
    dispatch(fetchCat());
  }

  function handleFeed() {
    dispatch(feedCat());
  }

  function handleAdopt() {
    dispatch(adoptCat());
  }

  function handleAddTodo(catId: number) {
    dispatch(fetchTodoByCatId(catId));
  }

  return (
    <div>
      <h2>Cats to adopt</h2>
      {cat.meta.isLoading && <div>LOADING...</div>}
      {cat.meta.error.hasError && (
        <div>Couldn't load cat: {cat.meta.error.message}</div>
      )}
      {cat.categories.stray && (
        <div>
          <img alt="cat" src={cat.categories.stray.image} />
          <div>
            This cat is called {cat.categories.stray.name} and she is{" "}
            {cat.categories.stray.isFed ? "not" : ""} hungry
          </div>
          {cat.categories.stray.isFed && <div>You can now adopt her</div>}
        </div>
      )}
      <button type="button" onClick={handleFetch}>
        Ccccc..
      </button>
      {cat.categories.stray && !cat.categories.stray.isFed && (
        <button type="button" onClick={handleFeed}>
          Feed current cat
        </button>
      )}
      {cat.categories.stray?.isFed && (
        <button type="button" onClick={handleAdopt}>
          Adopt cat
        </button>
      )}
      <div>
        {cat.categories.adopted.length > 0 &&
          cat.categories.adopted.map((cat) => (
            <div key={cat.id} onClick={() => handleAddTodo(cat.id)}>
              <img alt={cat.name} src={cat.image} />
              <h3>{cat.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};
