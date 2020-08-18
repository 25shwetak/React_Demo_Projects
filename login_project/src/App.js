import React from 'react';
//import LoginContainer from "./Containers/LoginContainer";
//import DashboardConatiner from "./Containers/DashboardContainer";
import Routes from "./routes/Routes";

import {Provider} from 'react-redux';
import {createStore, combineReducers} from "redux";
import loginDetailsReducer from './reducer/loginDetailsReducer';
import projectsReducer from './reducer/projectsReducer';

const store = createStore(combineReducers({loginDetailsReducer, projectsReducer}))

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
