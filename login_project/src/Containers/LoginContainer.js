import React from "react";
import LoginComponent from "../Components/LoginComponent";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { setUsernameError, setPasswordError, resetErrors, setErrors, loginRequest} from "../actions/loginActions";

const LoginContainer = () => {
  //const [state, dispatch] = useReducer(loginReducer, initialState)

  //let {username, password} = state

  /*const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [usernameError, setUsernameError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)*/
  
  const dispatch = useDispatch();
  const result = useSelector((state) => state.loginDetailsReducer);
  const {
    username,
    password,
    usernameError,
    passwordError,
    userDetails,
  } = result;

  const schema = yup.object().shape({
        username: yup.string().email().required(),
        password: yup.string().min(6).required(),
      });

  const setUsernameErrorToNull = () => {
    dispatch(setUsernameError());
  }

  const setPasswordErrorToNull = () => {
    dispatch(setPasswordError());
  }

  // const validateData = () => {
  //   dispatch(resetErrors());
  //   schema.validate({ username, password }, { abortEarly: false })
  //   .then(() => {
  //     apiHelper('post', 'https://api.taiga.io/api/v1/auth', {username, password, type: "normal"})
  //     .then(({data}) => {
  //       dispatch(setUserDetails(data));
  //       console.log(data)
  //     })
  //   })
  //   .catch((err) => {
  //     err.inner.forEach((ele) => {
  //       dispatch(setErrors(ele));
  //     });
  //   });
  // }

  const validateData = () => {
    dispatch(resetErrors());
    schema.isValid({username, password})
    .then(function(valid) {
        if(!valid){
          schema.validate({ username, password }, { abortEarly: false })
          .catch((err) => {
            err.inner.forEach((ele) => {
                dispatch(setErrors(ele));
            });
          });
        } else {
            dispatch(loginRequest({username, password}));
        }
    })
  }

  if (userDetails.auth_token){
    return (<Redirect to="/dashboard" />)
  };

  return (
    <LoginComponent 
      validateData={validateData}
      usernameError={usernameError}
      passwordError={passwordError}
      username={username}
      password={password}
      dispatch={dispatch}
      setUsernameErrorToNull={setUsernameErrorToNull}
      setPasswordErrorToNull={setPasswordErrorToNull} />
  )
}

export default LoginContainer;