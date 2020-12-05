import { action, makeAutoObservable, observable } from "mobx";
import UserService, { IParams } from "../services/UserService";

class UserStore {
  name = "";

  constructor() {
    makeAutoObservable(this, {
      name: observable,
      postUser: action,
      resetUser: action
    });
  }

  postUser = async (values: IParams) => {
    const { data } = await UserService.postUsername(values);
    this.name = data.name;
  };
  resetUser = () => {
    this.name = "";
  };
}

export default new UserStore();
