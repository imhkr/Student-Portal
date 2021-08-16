import { AnyAction } from "redux";
import { call, put, takeLatest, all } from "redux-saga/effects";
import { USER_FETCH_ONE, USER_ALL } from "../actions/actions.constants";
import {
  userFetchCompleted,
  userQueryCompleted,
} from "../actions/user.actions";
import {
  fetchUsers as fetchUsersAPI,
  fetchUser as fetchUserAPI,
} from "../api/Users";

export function* fetchUsers(): Generator<any> {
  const usersResponseData: any = yield call(fetchUsersAPI);
  yield put(userQueryCompleted(usersResponseData.data.data));
}
export function* fetchUser(action: AnyAction): Generator<any> {
  const userResponseData: any = yield call(fetchUserAPI, action.payload);
  yield put(userFetchCompleted(userResponseData));
}
export function* watchUserQueryChanged() {
  yield all([
    takeLatest(USER_ALL, fetchUsers),
    takeLatest(USER_FETCH_ONE, fetchUser),
  ]);
}

