import { Reducer } from "redux";
import { SIDEBAR_TOGGLE } from "../actions/actions.constants";

export interface SideBarState {
    SidebarOpen?: boolean;
}
const initialState = {
    SidebarOpen: true,
}
export const sidebarReducer: Reducer<SideBarState> = (state = initialState, action) => {
    switch (action.type) {
        case SIDEBAR_TOGGLE:
            return {
                ...state,
                SidebarOpen: !state.SidebarOpen
            };
        default:
            return state;
    }
};
