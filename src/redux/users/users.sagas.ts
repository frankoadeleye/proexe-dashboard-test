import { NETWORK_CALL, ResponseGenerator } from "apis";
import { call, put, takeEvery } from "redux-saga/effects";
import { GetUsersActions } from "redux/users";
import { GET_USERS } from "redux/users";
import { AlertActions } from "redux/alert";

function* GetUsers() {
  try {
    const Users: ResponseGenerator = yield call(NETWORK_CALL.GET_USERS);
    yield put(GetUsersActions.success(Users.data));
  } catch (error: any) {
    yield put(GetUsersActions.failure(error));
    yield put(AlertActions.failure(error.response.data.message));
  }
}

function* WatchUsers() {
  yield takeEvery(GET_USERS.STARTS, GetUsers);
}

export { WatchUsers };
