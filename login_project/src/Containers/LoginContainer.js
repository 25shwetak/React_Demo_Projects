import React, { useReducer } from "react";
import LoginComponent from "../Components/LoginComponent";
import * as yup from "yup";
import apiHelper from "../apis/apiHelper";
import loginReducer from "../reducer/loginReducer";

const initialState = {
  username: '',
  password: '',
  usernameError: null,
  passwordError: null
}


const LoginContainer = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState)

  let {username, password} = state

  /*const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [usernameError, setUsernameError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  
  const logValues = () => {
    console.log(username);
    console.log(password);
  }*/

  const schema = yup.object().shape({
        username: yup.string().email().required(),
        password: yup.string().min(6).required(),
      });

  const validateData = () => {
    dispatch({type: 'reset-errors'});
    schema.validate({username, password}, {abortEarly: false})
    .then((data) => {
      /*apiHelper('post', 'https://api.taiga.io/api/v1/auth/register', 
        {'accepted_terms': 'true', 'email': 'shweta@gmail.com', 
        'full_name': 'Shweta', 'password': 'shweta123', 'type': 'public', 
        'username': '25shweta'})*/
      apiHelper('post', 'https://api.taiga.io/api/v1/auth', {username, password, type: 'normal'})
      .then((response) => {
        console.log(response);
      })
    })
    .catch((err) => {
      err.inner.forEach((ele) => {

        dispatch({type: 'field', field: `${ele.path}Error`, value: ele.message});
        /*if (ele.path === 'username') setUsernameError(ele.message);
        if (ele.path === 'password') setPasswordError(ele.message);
        console.log(ele.path, ele.message);*/
      });
    });
  }

  const setUsernameErrorToNull = () => {
    //setUsernameError(null);
    dispatch({type: 'field', field: `usernameError`, value: null});
  }

  const setPasswordErrorToNull = () => {
    dispatch({type: 'field', field: `passwordError`, value: null});
  }

  return (
    <LoginComponent 
      validateData={validateData}
      state={state}
      dispatch={dispatch}
      setUsernameErrorToNull={setUsernameErrorToNull}
      setPasswordErrorToNull={setPasswordErrorToNull}/>
  )
}

export default LoginContainer;