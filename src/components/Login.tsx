import React from "react";
import {useDispatch} from "react-redux";
import {login, logout} from "../store/user";

export const Login = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(login({name: 'Bea', age: 34, email: 'bea@bea.com'}))}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}