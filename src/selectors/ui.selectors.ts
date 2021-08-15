import { createSelector } from "reselect";
import { sidebarSelector } from "./app.selectors";

export const sidebarOpenSelector = createSelector(
    [sidebarSelector],
    (sidebar) => sidebar.SidebarOpen
);

