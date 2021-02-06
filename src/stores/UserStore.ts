import { action, makeAutoObservable, observable, runInAction } from "mobx";
import UserService, { IParams } from "../services/UserService";
import { IPeer } from "./types";

class UserStore {
  name = "";
  peers: IPeer[] = [];

  constructor() {
    makeAutoObservable(this, {
      name: observable,
      peers: observable,
      signUp: action,
      resetUser: action
    });
  }

  login = async (values: IParams) => {
    const { data } = await UserService.login(values);
    runInAction(() => {
      this.name = data.name;
      this.peers = data.peers;
    });
    return data;
  };
  signUp = async (values: IParams) => {
    const { data } = await UserService.signUp(values);
    runInAction(() => {
      this.name = data.name;
    });
    return data;
  };
  resetUser = () => {
    this.name = "";
  };
}

export default new UserStore();
