import React from "react";
import {useDispatch} from "react-redux";
import {login} from "../store/user";

export const Login = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(login({name: 'Bea', age: 34, email: 'bea@bea.com'}))}>Login</button>
    </div>
  )
}