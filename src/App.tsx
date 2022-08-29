import React from 'react';
import './App.css';
import {Profile} from "./components/Profile";
import {Login} from "./components/Login";
import {ChangeColor} from "./components/ChangeColor";

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
    </div>
  );
}

export default App;
