import axios, { AxiosResponse } from "axios";

const url = "/user";

export interface IParams {
  name: string;
}

const UserService = {
  login: (): Promise<AxiosResponse> => axios.get(url),
  postUsername: (params: IParams): Promise<AxiosResponse> =>
    axios.post(url, params)
};

export default UserService;
