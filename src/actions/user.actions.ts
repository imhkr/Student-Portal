import { bindActionCreators } from "redux";
import { User } from "../models/User";
import { store } from "../store";
import { ME_UPDATE, USER_FETCH_COMPLETED, USER_FETCH_ONE, USER_QUERY, USER_QUERY_COMPLETED, USER_SELECTED_CHANGED } from "./actions.constants";

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
    type: USER_QUERY,
  });
  export const userQueryCompleted = (users: User[]) => ({
    type: USER_QUERY_COMPLETED,
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

  export const userChangeSelected = (id: number) => ({
  type: USER_SELECTED_CHANGED,
  payload: id,
});


