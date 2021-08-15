import { bindActionCreators } from "redux";
import { User } from "../models/User";
import { ME_FETCH, ME_LOGIN } from "./actions.constants";
import { store } from "../store";

const meFetch = (u: User) => ({
    type: ME_FETCH,
    payload: u
});
const meLogin = (u: User) => ({
    type: ME_LOGIN,
    payload: u
});

export const authActions = bindActionCreators(
    {
    fetch: meFetch,
        login: meLogin,
    },
    store.dispatch
);
