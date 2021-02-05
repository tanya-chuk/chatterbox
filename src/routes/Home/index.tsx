import { Button, makeStyles, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import React, { FC, ReactNode, useState } from "react";
import { Form, FormRenderProps } from "react-final-form";
import FormTextField from "../../components/FormTextField";
import Tabs from "../../components/Tabs";
import { IStore, useStore } from "../../stores";

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
  const {
    UserStore: { name, signUp, login }
  } = useStore();
  const initialValues = { name, password: "" };

  const tabsConfig = {
    signIn: {
      label: "Sign in",
      value: "signIn",
      component: (
        <>
          <FormTextField
            required
            name="name"
            label="Enter your username"
            placeholder="name"
          />
          <FormTextField
            required
            type="password"
            name="password"
            label="Enter your password"
            placeholder="password"
          />
        </>
      )
    },
    signUp: {
      label: "Sign up",
      value: "signUp",
      component: (
        <>
          <FormTextField
            required
            name="name"
            label="Set a username"
            placeholder="name"
          />
          <FormTextField
            required
            type="password"
            name="password"
            label="Set a password"
            placeholder="password"
          />
        </>
      )
    }
  };

  const [currentTab, setCurrentTab] = useState<string | number>(
    tabsConfig.signIn.value
  );

  const handleFormSubmit = (values: IFormValues) =>
    currentTab === "signUp" ? signUp(values) : login(values);

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
      {name ? (
        <Typography>Welcome, {name}!</Typography>
      ) : (
        <Form
          initialValues={initialValues}
          render={renderForm}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
});

export default Home;
