import React from 'react';
//import LoginContainer from "./Containers/LoginContainer";
//import DashboardConatiner from "./Containers/DashboardContainer";
import Routes from "./routes/Routes";

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from "redux";
import loginDetailsReducer from './reducer/loginDetailsReducer';
import projectsReducer from './reducer/projectsReducer';
import createSagaMiddleware from 'redux-saga';
import userSaga from "./sagas/userSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    loginDetailsReducer, 
    projectsReducer
  }), 
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(userSaga);

function App() {
  return (
    //<LoginContainer />
    //<DashboardConatiner />
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
