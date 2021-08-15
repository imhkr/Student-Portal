import { AppState } from "../store";

export const groupStateSelector = (state: AppState) => state.groups;
export const userStateSelector = (state: AppState) => state.user;
export const sidebarSelector = (state: AppState) => state.sidebar;
export const authStateSeclector = (state: AppState) => state.auth;