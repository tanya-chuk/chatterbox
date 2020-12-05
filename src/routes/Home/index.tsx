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
  username: string;
}

type IRenderForm = (props: FormRenderProps<IFormValues>) => ReactNode;

type IProps = IStore;

const Home: FC<IProps> = observer(() => {
  const classes = useStyles();
  const {
    UserStore: { username, postUsername, resetUsername }
  } = useStore();
  const initialValues = { username };

  useEffect(() => {
    return () => resetUsername();
  }, []);

  const handleFormSubmit = (values: IFormValues) => postUsername(values);

  const renderForm: IRenderForm = ({ dirty, handleSubmit }) => (
    <form onSubmit={handleSubmit} className={classes.form}>
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
  // todo разобраться с обновлением имени
  return (
    <div className={classes.root}>
      {username ? (
        <Typography>Welcome, {username}!</Typography>
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
