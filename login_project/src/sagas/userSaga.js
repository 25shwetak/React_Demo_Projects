import { takeLatest, call, put} from "redux-saga/effects";
import { LOGIN_REDUCER } from "../shared/actionConstants";
import login from "../apis/loginApi";
import { setUserDetails, loginFailed } from "../actions/loginActions";

//worker saga
export function* loginSaga(action) {
  try {
    console.log(action)
    const { data } = yield call(login, action.value);
    yield put(setUserDetails(data));
  } catch(error) {
      console.log(error);
      yield put(loginFailed(error));
  }  
}

//watcher saga
export default function* userSaga() {
    yield takeLatest(LOGIN_REDUCER.LOGIN_REQUEST, loginSaga);
}

