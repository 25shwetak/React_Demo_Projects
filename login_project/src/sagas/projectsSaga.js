import { PROJECT_REDUCER } from "../shared/actionConstants";
import { takeLatest, call, put } from "redux-saga/effects";
import { setProjects } from "../actions/projectsActions";
import getProjectsApi from "../apis/projectsApi";

//worker saga
export function* projectWorkerSaga(action) {
  try {
    const { data } = yield call(getProjectsApi);
    yield put(setProjects(data));
  } catch(error) {
      console.log(error);
  }  
}

//watcher saga
export default function* projectWatcherSaga() {
  yield takeLatest(PROJECT_REDUCER.GET_PROJECTS, projectWorkerSaga);
}