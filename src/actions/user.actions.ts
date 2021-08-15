import { bindActionCreators } from "redux";
import { User } from "../models/User";
import { store } from "../store";
import { ME_UPDATE } from "./actions.constants";

const meUpdate = (u: User) => ({
    type: ME_UPDATE,
    payload: u,
});

export const userActions = bindActionCreators(
    {
        update: meUpdate,
    },
    store.dispatch
);
