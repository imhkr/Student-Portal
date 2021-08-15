import axios from "axios";
import { User } from "../models/User";
import { BASE_URL, LS_AUTH_TOKEN } from "./base";
const token=localStorage.getItem(LS_AUTH_TOKEN);
interface LoginRequest {
    email: string;
    password: string;
}
interface LoginResponse {
    data: {
        is_2fa_enabled: boolean;
    };
    token: string;
    user: User;
}
interface MeResponse {
    data: User;
}
export const login = (data: LoginRequest) => {
    const url = BASE_URL + "/login";
    console.log(data);

    return axios.post<LoginResponse>(url, data).then((response) => {
        localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
        return response.data.user;
    });
};


export const logout = () => {
    localStorage.removeItem(LS_AUTH_TOKEN);
};
export const me = () => {
    const url = BASE_URL + "/me";
    return axios.get<MeResponse>(url).then((response) => response.data.data);
};
interface MeData {
  data: User;
}

export const updateUser = async (data: User) => {
    const url = BASE_URL + "/me";
    const update= await axios.put(url,data);
    return update;
};