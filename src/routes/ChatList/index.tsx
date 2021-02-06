import {
  Avatar,
  Button,
  makeStyles,
  MenuItem,
  MenuList,
  Typography
} from "@material-ui/core";
import { observer } from "mobx-react";
import React, { FC } from "react";
import { IStore, useStore } from "../../stores";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    width: "100%",
    padding: `${spacing(1)}px ${spacing(1)}px`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  menuItem: {
    width: 300,
    margin: spacing(0.5),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #BBB9C3",
    borderRadius: 4
  }
}));

type IProps = IStore;

const ChatList: FC<IProps> = observer(() => {
  const classes = useStyles();
  const {
    UserStore: { peers }
  } = useStore();
  return (
    <MenuList className={classes.root}>
      {peers.map(({ _id, name }) => (
        <MenuItem key={_id} className={classes.menuItem}>
          <Avatar>{name[0]}</Avatar>
          <Typography>{name}</Typography>
          <Button>Start chat</Button>
        </MenuItem>
      ))}
    </MenuList>
  );
});

export default ChatList;
