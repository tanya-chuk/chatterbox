import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import ChatList from "../ChatList";
import Home from "../Home";
import { routesUrls } from "./routesUrls";

const Root: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path={routesUrls.MESSAGES} component={ChatList} />
    </Switch>
  );
};

export default Root;
