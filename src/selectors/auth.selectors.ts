import { authStateSeclector, userStateSelector } from "./app.selectors";
import { createSelector } from "reselect";

const authIdSelector = createSelector([authStateSeclector], (authState) => {
    return authState.id;
});

const userIdSelector = createSelector([userStateSelector], (userState) => {
    return userState.byId;
});

export const meSelector = createSelector(
  [authIdSelector, userIdSelector],
  (authId, userId) => {
    return authId !== undefined ? userId[authId!] : undefined;
  }
);