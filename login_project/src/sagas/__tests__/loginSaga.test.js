import {loginFailed, setUserDetails, loginRequest} from "../../actions/loginActions";
import { loginSaga } from "../userSaga";
import { call, put } from "redux-saga/effects";
import login from "../../apis/loginApi";

describe("Login Saga", () => {
  let gen, action;

  const response = {
    data : {
      id: 1,
      username: 1,
      auth_token: "test"
    }
  }

  beforeEach(() => {
    action = loginRequest({email: "shweta@gmail.com", password: "pass"})
    gen = loginSaga(action)
  })

  it("Must call api", () => {
    expect(gen.next().value).toEqual( call(login, action.value))
  });

  it("Must dispatch success action", () => {
    gen.next();
    expect(gen.next(response).value).toEqual(put(setUserDetails(response.data)))
    expect(gen.next().done).toEqual(true)
  });

  it("Must dispatch failure action", () => {
    const error = "Login Failed!!";
    gen.next()
    expect(gen.throw(error).value).toEqual( put(loginFailed(error)) )
  })
});