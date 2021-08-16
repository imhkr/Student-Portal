import { Reducer } from "redux";
import { User } from "../models/User";
import { ME_FETCH, ME_LOGIN, USER_FETCH_COMPLETED, USER_FETCH_ONE, USER_ALL, USER_ALL_COMPLETED } from "../actions/actions.constants";
import { addMany, addOne, EntityState, getIds, initialEntityState,select } from "./entity.reducer";

export interface UserState extends EntityState {
     byId: { [id: number]: User
}
 loading?: boolean;
  userIds?: any;
  user?: User;
  selectedId?: number;
}

const initialState = {
     ...initialEntityState,
    byId: {},
    userIds: [],
  loading: false,
};

export const userReducer: Reducer<UserState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ME_FETCH:
        case ME_LOGIN:
            return addOne(state,action.payload) as UserState;
         case USER_ALL:
      return { ...state, loading: true };
    case USER_ALL_COMPLETED:
      const userIds = getIds(action.payload);
      const newState = addMany(state, action.payload) as UserState;
      return {
        ...newState,
        userIds: userIds,
        loading: false,
      };

    case USER_FETCH_ONE:
    return select(state, action.payload) as UserState;
     case USER_FETCH_COMPLETED:
      return { ...(addOne(state, action.payload,false) as UserState) };
        default:
            return state;
    }
};