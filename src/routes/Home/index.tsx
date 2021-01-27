import { Button, makeStyles, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import React, { FC, ReactNode, useEffect } from "react";
import { Form, FormRenderProps } from "react-final-form";
import FormTextField from "../../components/FormTextField";
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
}

type IRenderForm = (props: FormRenderProps<IFormValues>) => ReactNode;

type IProps = IStore;

const Home: FC<IProps> = observer(() => {
  const classes = useStyles();
  const {
    UserStore: { name, postUser, login }
  } = useStore();
  const initialValues = { name };

  const handleFormSubmit = (values: IFormValues) => postUser(values);

  const renderForm: IRenderForm = ({ dirty, handleSubmit }) => (
    <form onSubmit={handleSubmit} className={classes.form}>
      <FormTextField
        required
        name="name"
        label="Set your username"
        placeholder="name"
      />
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
