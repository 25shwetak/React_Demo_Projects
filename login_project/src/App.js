import React from 'react';
import Routes from "./routes/Routes";

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from "redux";
import loginDetailsReducer from './reducer/loginDetailsReducer';
import projectsReducer from './reducer/projectsReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    loginDetailsReducer, 
    projectsReducer
  }), 
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
