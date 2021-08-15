import { Reducer } from "redux";
import { User } from "../models/User";
import { ME_FETCH, ME_LOGIN } from "../actions/actions.constants";
import { addOne } from "./entity.reducer";

export interface UserState {
     byId: { [id: number]: User
}
}

const initialState = {
    byId: {},
};

export const userReducer: Reducer<UserState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ME_FETCH:
        case ME_LOGIN:
            return addOne(state,action.payload) as UserState;

        default:
            return state;
    }
};