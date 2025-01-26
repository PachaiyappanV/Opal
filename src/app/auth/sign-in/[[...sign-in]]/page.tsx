import React from "react";
import { SignIn } from "@clerk/nextjs";

type Props = {};

const SignInPage = (props: Props) => {
  return <SignIn signUpUrl="/auth/sign-up" />;
};

export default SignInPage;
