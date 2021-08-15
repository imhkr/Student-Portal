import { takeLatest,takeEvery, call, put,delay,all } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUP_FETCH_COMPLETE, GROUP_FETCH_ONE, GROUP_QUERY_CHANGED } from "../actions/actions.constants";
import { fetchOneGroupComplete, groupsFetched } from "../actions/group.actions";
import { fetchOneGroup, fetchGroupsAPI } from "../api/group";
import { Group } from "../models/Group";

function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(300);
  const groupRes:any = yield call(fetchGroupsAPI, {
    query: action.payload.query,
    status: "all-groups",
  });

  yield put(
    groupsFetched(groupRes.data.data, action.payload.query)
  );
}
function* fetchOneGrp(action: AnyAction): Generator<any> {
  const res:any = yield call(fetchOneGroup, action.payload);


  yield put(
    fetchOneGroupComplete(res.data.data));

}

export function* watchGroupQueryChanged() {
 
  // yield takeEvery(GROUP_QUERY_CHANGED, fetchGroups);
  yield all([ takeLatest(GROUP_QUERY_CHANGED,fetchGroups),
  takeEvery(GROUP_FETCH_ONE,fetchOneGrp),
  ])
}