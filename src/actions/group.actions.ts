import { GROUP_FETCHED, GROUP_FETCH_COMPLETE, GROUP_FETCH_ONE, GROUP_QUERY_CHANGED, GROUP_SELECT } from "./actions.constants";
import { Group } from "../models/Group";

export const groupQueryChange=(query:string)=>({
    type:GROUP_QUERY_CHANGED,
    payload:{query},
});
export const groupsFetched=(
    groups:Group[],
    query?:string,
)=>({
    type:GROUP_FETCHED,
    payload:{groups,query},
});
export const groupsSelect = (id: number) => ({
    type: GROUP_SELECT,
    payload: id,
});
export const fetchOneGroup=(id:number)=>({
    type:GROUP_FETCH_ONE,
    payload:id,
})
export const fetchOneGroupComplete=(group:Group)=>({
    type:GROUP_FETCH_COMPLETE,
    payload:group,
})

