import axios, { CancelToken } from "axios";
import { Group } from "../models/Group";
import { BASE_URL ,get} from "./base";


export interface GroupResponse {
    data: Group[];
}

export interface GroupRequest {
    limit?: number;
    offset?: number;
    query: string;
    status: "all-groups" | "archived" | "favourite";
}

export const fetchGroupsAPI = (data: GroupRequest) => {
    const url = BASE_URL + "/groups";

    return get<GroupResponse>(url, { params: data })

};
export const fetchOneGroup = (id: string) => {
    const url = BASE_URL + "/groups/" +id;

    return axios.get<GroupResponse>(url)

};