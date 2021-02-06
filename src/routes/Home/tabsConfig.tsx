import React from "react";
import FormTextField from "../../components/FormTextField";

export const tabsConfig = {
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
