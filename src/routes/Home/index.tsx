import { Button, makeStyles } from "@material-ui/core";
import { observer } from "mobx-react";
import React, { FC, ReactNode, useState } from "react";
import { Form, FormRenderProps } from "react-final-form";
import { useHistory } from "react-router";
import Tabs from "../../components/Tabs";
import { IStore, useStore } from "../../stores";
import { routesUrls } from "../Root/routesUrls";
import { tabsConfig } from "./tabsConfig";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  }
}));

interface IFormValues {
  name: string;
  password: string;
}

type IRenderForm = (props: FormRenderProps<IFormValues>) => ReactNode;

type IProps = IStore;

const Home: FC<IProps> = observer(() => {
  const classes = useStyles();
  const history = useHistory();
  const {
    UserStore: { name, signUp, login }
  } = useStore();
  const initialValues = { name, password: "" };
  const [currentTab, setCurrentTab] = useState<string | number>(
    tabsConfig.signIn.value
  );

  const handleFormSubmit = async (values: IFormValues) => {
    const response = await (currentTab === "signUp"
      ? signUp(values)
      : login(values));

    if (response) {
      history.push(routesUrls.MESSAGES);
    }
  };

  const handleTabChange = (newTab: string | number) => {
    setCurrentTab(newTab);
  };

  const renderForm: IRenderForm = ({ dirty, handleSubmit }) => (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Tabs tabs={tabsConfig} onChange={handleTabChange} />
      <Button disabled={!dirty} type="submit">
        Enter the chat
      </Button>
    </form>
  );

  return (
    <div className={classes.root}>
      <Form
        initialValues={initialValues}
        render={renderForm}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
});

export default Home;
