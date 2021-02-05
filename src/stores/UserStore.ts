import { action, makeAutoObservable, observable } from "mobx";
import UserService, { IParams } from "../services/UserService";

class UserStore {
  name = "";

  constructor() {
    makeAutoObservable(this, {
      name: observable,
      signUp: action,
      resetUser: action
    });
  }

  login = async (values: IParams) => {
    const { data } = await UserService.login(values);
    this.name = data.name;
  };
  signUp = async (values: IParams) => {
    const { data } = await UserService.signUp(values);
    this.name = data.name;
  };
  resetUser = () => {
    this.name = "";
  };
}

export default new UserStore();
