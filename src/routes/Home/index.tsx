import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { FC } from "react";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
}));

const Home: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField required label="Set your username" placeholder="username" />
      <Button>Enter the chat</Button>
    </div>
  );
};

export default Home;
