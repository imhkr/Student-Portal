import { bindActionCreators } from "redux";
import { User } from "../models/User";
import { store } from "../store";
import { ME_UPDATE, USER_FETCH_COMPLETED, USER_FETCH_ONE, USER_ALL, USER_ALL_COMPLETED, USER_SELECTED_CHANGED, SELECTED_USER_ERROR } from "./actions.constants";

const meUpdate = (u: User) => ({
    type: ME_UPDATE,
    payload: u,
});

// export const userActions = bindActionCreators(
//     {
//         update: meUpdate,
//     },
//     store.dispatch
// );

export const userChangedAction = () => ({
    type: USER_ALL,
  });
  export const userQueryCompleted = (users: User[]) => ({
    type: USER_ALL_COMPLETED,
    payload: users,
  });

  export const userFetchCompleted = (user: User) => ({
    type: USER_FETCH_COMPLETED,
    payload: user,
  });

  export const userFetchOne = (selectedId: number) => ({
    type: USER_FETCH_ONE,
    payload: selectedId,
  }); 
export const selectedUserErrorAction = (error: string) => ({
	type: SELECTED_USER_ERROR,
	payload: error,
});
  export const userChangeSelected = (id: number) => ({
  type: USER_SELECTED_CHANGED,
  payload: id,
});


