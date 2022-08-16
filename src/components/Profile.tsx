import React from "react";
import {useSelector} from "react-redux";
import {AppRootState} from "../store/reducers";

export const Profile: React.FC = () => {
  const {name, email, age} = useSelector((state: AppRootState) => state.user)
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  )
}