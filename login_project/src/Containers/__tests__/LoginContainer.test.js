import{ render } from '@testing-library/react'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import React from "react";
import LoginContainer from "../LoginContainer";
import loginDetailsReducer from '../../reducer/loginDetailsReducer';
import projectsReducer from '../../reducer/projectsReducer';

const store = createStore(
  combineReducers({
    loginDetailsReducer, 
    projectsReducer
  })
);

describe("Login Container", () => {
  it("Must return login component", () => {
    const { asFragment } = render(
      <Provider store = {store}>
        <LoginContainer />
      </Provider>
    )

    expect(asFragment()).toMatchSnapshot();
  })
})