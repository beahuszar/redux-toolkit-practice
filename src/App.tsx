import React from 'react';
import './App.css';
import {Profile} from "./components/Profile";
import {Login} from "./components/Login";
import {ChangeColor} from "./components/ChangeColor";
import {CatCare} from "./components/CatCare";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
      {/* TODO
          createAction()
          createReducer()
          shared actions
          Thunk
      */}
      <CatCare/>
    </div>
  );
}

export default App;
