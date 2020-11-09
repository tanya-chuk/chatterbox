import { TextField, TextFieldProps } from "@material-ui/core";
import React, { FC } from "react";
import { useField } from "react-final-form";

type IProps = {
  name: string;
} & TextFieldProps;

const FormTextField: FC<IProps> = ({ name, ...props }: IProps) => {
  const { input, meta } = useField(name);
  const error = meta.error || meta.submitError;
  return <TextField error={Boolean(error)} {...input} {...props} />;
};

export default FormTextField;
