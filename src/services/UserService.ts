import axios, { AxiosResponse } from "axios";

const url = "/user";

export interface IParams {
  name: string;
}

const UserService = {
  login: (params: IParams): Promise<AxiosResponse> =>
    axios.post(`${url}/login`, params),
  signUp: (params: IParams): Promise<AxiosResponse> =>
    axios.post(`${url}/signup`, params),
  getHistory: (id: string): Promise<AxiosResponse> =>
    axios.get(`${url}/history`, { params: { id } })
};

export default UserService;
