import { ME_FETCH, ME_LOGIN } from "../actions/actions.constants";
import { Reducer } from "redux";
export interface AuthState {
    id?: number;
}

const initialState = {
    id: undefined,
};

export const authReducer: Reducer<AuthState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ME_FETCH:
        case ME_LOGIN:
            return { ...state, id: action.payload.id };

        default:
            return state;
    }
};