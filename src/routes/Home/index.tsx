import { Button, makeStyles } from "@material-ui/core";
import React, { FC, ReactNode } from "react";
import { Form, FormRenderProps } from "react-final-form";
import FormTextField from "../../components/FormTextField";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
}));

interface IFormValues {
  username: string;
}

type IRenderForm = (props: FormRenderProps<IFormValues>) => ReactNode;

const Home: FC = () => {
  const classes = useStyles();
  const initialValues = {
    username: ""
  };

  const handleFormSubmit = (values: IFormValues) => {
    return values;
  };

  const renderForm: IRenderForm = ({ dirty, handleSubmit }) => (
    <form onSubmit={handleSubmit} className={classes.root}>
      <FormTextField
        required
        name="username"
        label="Set your username"
        placeholder="username"
      />
      <Button disabled={!dirty} type="submit">
        Enter the chat
      </Button>
    </form>
  );

  return (
    <Form
      initialValues={initialValues}
      render={renderForm}
      onSubmit={handleFormSubmit}
    />
  );
};

export default Home;
