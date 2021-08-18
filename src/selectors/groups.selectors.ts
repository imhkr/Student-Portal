import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";
import {userByIdSelector} from "./users.selectors";
export const groupQuerySelector = createSelector([groupStateSelector], (state) => {
    return state.query;
}
);

export const byIdSelector = createSelector([groupStateSelector], (state) => {
    return state.byId;
}
);
export const queryMapSelector = createSelector([groupStateSelector], (state) => {
    return state.queryMap;
}
);



export const groupIdSelector = createSelector(
    [groupStateSelector],
    (state) => {
        return state.byId;
    }
);

export const groupLoadingSelector=createSelector(
    [groupStateSelector],
    (groupState)=>
    {
        return groupState.loading
    }
);
// export const groupLoadingSelector=createSelector(
//     [groupQuerySelector,groupLoadingQuerySelector],
//     (query,loadingMap)=>loadingMap[query]
// );
export const GroupsResultSelector = createSelector(
    [groupQuerySelector, queryMapSelector, byIdSelector],
    (query, queryMap, byId) => {
        const groupIds = queryMap[query] || [];
        const groups = groupIds.map((id) => byId[id]);
        return groups;
    }
);


export const groupCreatorIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.creatorId
);
export const groupMemberListIdIdsSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.participantsIds
);
