import { AnyAction } from "redux";
import { call, put, takeLatest, all } from "redux-saga/effects";
import { USER_FETCH_ONE, USER_ALL, SELECTED_USER_ERROR } from "../actions/actions.constants";
import {
  selectedUserErrorAction,
  userFetchCompleted,
  userQueryCompleted,
} from "../actions/user.actions";
import {
  fetchUsers as fetchUsersAPI,
  fetchUser as fetchUserAPI,
} from "../api/Users";
import { User } from "../models/User";

export function* fetchUsers(): Generator<any> {
  const usersResponseData: any = yield call(fetchUsersAPI);
  yield put(userQueryCompleted(usersResponseData.data.data));
}
export function* fetchUser(action: AnyAction): Generator<any> {
  const id=action.payload as number;
  try
  {
  const userResponseData: any = yield call(fetchUserAPI, id);
  yield put(userFetchCompleted(userResponseData as User));
  } catch(error)
  {
    const errorMessage=error.response?.data?.message||"Person Not Found";
    yield put(selectedUserErrorAction(errorMessage));
  }
}
export function* watchUserQueryChanged() {
  yield all([
    takeLatest(USER_ALL, fetchUsers),
    takeLatest(USER_FETCH_ONE, fetchUser),
  ]);
}

