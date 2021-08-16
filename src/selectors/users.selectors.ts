import { createSelector } from "reselect";
import { AppState } from "../store";
export const userStateSelector = (state: AppState) => state.user;
export const userByIdSelector = createSelector(
  [userStateSelector],
  (state) => state.byId
);

export const userIdsSelector = createSelector([userStateSelector], state => state.userIds);

export const userLoadingStateSelector = createSelector(
  [userStateSelector],
  (userState) => userState.loading
);
export const loadingListUserSelector = createSelector(
  [userStateSelector],
  (state) => {
    return state.loadingList;
  }
);
export const loadingByIdUserSelector = createSelector(
  [userStateSelector],
  (state) => {
    return state.loadingById;
  }
);
export const userListSelector = createSelector(
  [userByIdSelector, userIdsSelector],
  (byId, userIds) => {
    const usersGroup = userIds!.map((id: number) => byId[id]);
    return usersGroup;
  }
);

export const userFetchedSelector = createSelector(
  [userStateSelector],
  (state) => state.user
); 

export const userSelectedIdSelector = createSelector(
  [userStateSelector],
  (state) => state.selectedId
);

export const currentSelectedUserSelector = createSelector(
  [userByIdSelector, userSelectedIdSelector],
  (byId, id) => {
    return id !== undefined ? byId[id] : undefined;
  }
);