import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";

const Root: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Root;
