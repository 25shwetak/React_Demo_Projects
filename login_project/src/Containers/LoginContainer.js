import React, { useState } from "react";
import LoginComponent from "../Components/LoginComponent";
import * as yup from "yup";

const LoginContainer = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const logValues = () => {
    console.log(username);
    console.log(password);
  }

  const schema = yup.object().shape({
        username: yup.string().email().required(),
        password: yup.string().required(),
      });

  return (
    <LoginComponent username={username} password={password} setUsername={setUsername} setPassword={setPassword} logValues={logValues} schema={schema}/>
  )
}

export default LoginContainer;