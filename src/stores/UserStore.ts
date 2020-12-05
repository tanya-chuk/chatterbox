import { action, observable } from "mobx";
import UserService, { IParams } from "../services/UserService";

class UserStore {
  @observable username = "";

  @action postUsername = async (values: IParams) => {
    const { data } = await UserService.postUsername(values);
    this.username = data.username;
  };
  @action resetUsername = () => {
    this.username = "";
  };
}

export default new UserStore();
