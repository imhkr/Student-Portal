import axios, { CancelTokenSource } from "axios";
import { User } from "../models/User";
import { BASE_URL, get } from "./base";

export interface UserResponse {
  data: User[];
}

export const fetchUsers = () => {
  const url = BASE_URL + "/people";
  return get<UserResponse>(url);
};

export interface CurrentUserResponse {
  data: User;
}

export const fetchUser = (current: number) => {
  const url = BASE_URL + "/people/" + current;
  return axios.get<CurrentUserResponse>(url).then((response) => {
    return response.data.data;
  });
};