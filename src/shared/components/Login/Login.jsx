import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";

import NavAuth from "../Navigation/NavAuth.jsx";
import { signin } from "../../../redux/auth/operations.js";

import {
  StyledInputAuth,
  StyledFormAuth,
  StyledBtnAuthAccent,
  StyledWrapInputAuth,
  StyledLabelAuth,
  StyledErrorAuth,
  StyledWrapAuthBtn,
  AuthWrapComponent,
  WrapperForm,
  AuthFormPasswordIcon,
  StyledEyeIcon,
  StyledEyeIconVis,
} from "./Login.styled.jsx";

let schema = yup.object({
  password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Min length 8 symbols")
    .max(64, "Max length 64 symbols")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+[\]{}|;':",.<>?`~\-=_]+$/,
      "Invalid characters in password"
    )
    .test(
      "no-spaces",
      "Password cannot contain spaces",
      (value) => !/\s/.test(value)
    ),

  email: yup
    .string()
    .required("Please enter an email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter a valid email address"
    ),
});

const initialValues = {
  email: "",
  password: "",
  showPassword: false,
};

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formikRef = React.useRef();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values) => {
    const { email, password } = values;
    setIsLoading(true);
    const resultAction = await dispatch(signin({ email, password }));
    if (signin.fulfilled.match(resultAction)) {
      navigate("/home");
      formikRef.current.resetForm();
    } else if (signin.rejected.match(resultAction)) 
    setIsLoading(false);
  };

  return (
    <>
      <WrapperForm>
        <AuthWrapComponent>
          <NavAuth />
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={onSubmit}
          >
            <StyledFormAuth>
              <StyledWrapInputAuth>
                <StyledInputAuth
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <StyledLabelAuth></StyledLabelAuth>
                <ErrorMessage name="email">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </StyledWrapInputAuth>
              <StyledWrapInputAuth>
                <StyledInputAuth
                  className="no-bottom-padding"
                  name="password"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                />
                <StyledLabelAuth></StyledLabelAuth>
                <ErrorMessage name="password">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
                <AuthFormPasswordIcon onClick={handleTogglePassword}>
                  {showPassword ? (
                    <StyledEyeIcon size={18} />
                  ) : (
                    <StyledEyeIconVis size={18} />
                  )}
                </AuthFormPasswordIcon>
              </StyledWrapInputAuth>
              <StyledWrapAuthBtn>
                <StyledBtnAuthAccent type="submit" disabled={isLoading}>
                  Log In Now
                </StyledBtnAuthAccent>
              </StyledWrapAuthBtn>
            </StyledFormAuth>
          </Formik>
        </AuthWrapComponent>
      </WrapperForm>
    </>
  );
}

export default Login;
