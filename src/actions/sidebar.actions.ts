import { bindActionCreators } from "redux";
import { store } from "../store";
import { SIDEBAR_TOGGLE } from "./actions.constants"

export const toggleSidebar = (isOpen: boolean) => ({
    type: SIDEBAR_TOGGLE,
    payload: isOpen,
});

export const sidebarActions = bindActionCreators(
    {
        toggleSidebar: toggleSidebar,
    },
    store.dispatch
);
