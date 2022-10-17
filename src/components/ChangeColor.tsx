import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {changeColor} from "../store/theme.reducer";

export const ChangeColor: React.FC = () => {
  const dispatch = useDispatch()
  const [color, setColor] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setColor(e.target.value)
  }

  function submitColor() {
    dispatch(changeColor(color))
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
      />
      <button onClick={submitColor}>CHANGE COLOR</button>
    </div>
  );
}