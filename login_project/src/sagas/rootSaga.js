import userSaga from "./userSaga";
import projectsSaga from "./projectsSaga";
import { all } from "redux-saga/effects"

export default function* rootSaga() {
  yield all([
    userSaga(),
    projectsSaga()
  ]);
}