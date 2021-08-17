import {  Reducer } from "redux";
import { GROUP_FETCHED, GROUP_FETCH_COMPLETE, GROUP_FETCH_ONE, GROUP_QUERY_CHANGED, GROUP_SELECTED } from "../actions/actions.constants";
import { Group } from "../models/Group";
import { User } from "../models/User";

import { addMany, addOne, EntityState, getIds, initialEntityState } from "./entity.reducer";

interface GroupState extends EntityState<Group> {
   loading:boolean;
    query: string;
    queryMap: { [query: string]: number[] };
    selectedId?: number;
    creatorId:{[groupId:number]:number};
    participantsIds:{[groupId:number]:number[]};
}

const initialState = {
    ...initialEntityState,
    query: "",
    byId: {},
    queryMap: {},
    loading:false,
    creatorId:{},
    participantsIds:{},
};

export const groupReducer: Reducer<GroupState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case GROUP_QUERY_CHANGED:
            
            return {
                 ...state,
                 query: action.payload.query,
              loading:true,
            };
    case GROUP_FETCH_ONE:
            return { ...state, selectedId: action.payload };
        case GROUP_FETCHED:
            const groups = action.payload.groups as Group[];
            const groupIds = getIds(groups);

            const newState = addMany(state, groups) as GroupState;

            return {
                ...newState,
                queryMap: {
                    ...state.queryMap,
                    [action.payload.query]: groupIds,
                },
               loading:false,
            };
            case GROUP_FETCH_COMPLETE:{
                const group=action.payload as Group;
                const newStateG=addOne(state,action.payload,false) as GroupState;
                const participantIds=group.participants!.map((member:User)=>{
                    return member.id!;
                });
                return {
                    ...newStateG,
                    creatorId:{
                        ...newStateG.creatorId,
                        [group.id!]:group.creator!.id,
                    },
                    participantsIds:{
                        ...newStateG.participantsIds,
                        [group.id!]:participantIds,
                    },
                };
                }
        default:
            return state;
    }
};