import React from "react";
import "./App.css";
import { CatCare } from "./components/CatCare";
import { ChangeColor } from "./components/ChangeColor";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
      {/* TODO
          shared actions
      */}
      <CatCare />
    </div>
  );
}

export default App;
