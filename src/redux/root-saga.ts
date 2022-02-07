import { all } from "redux-saga/effects";
import { WatchUsers } from "redux/users";

function* CombineSagas() {
  yield all([WatchUsers()]);
}

export default CombineSagas;
