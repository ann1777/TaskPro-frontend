import { Formik, ErrorMessage } from "formik";

import * as yup from "yup";
import {
  StyledInputAuth,
  StyledFormAuth,
  StyledBtnAuthAccent,
  StyledHeaderAuth,
  StyledWrapInputAuth,
  StyledLabelAuth,
  StyledErrorAuth,
  StyledWrapAuthBtn,
  AuthWrapComponent,
} from "../Login/Login.styled";
import Navigation from "../Navigation/Navigation";

let schema = yup.object({
  username: yup
    .string()
    .required("Please enter your name")
    .min(3, "Min length 8 symbols")
    .max(32, "Max length 32 symbols"),

  password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Min length 8 symbols")
    .max(32, "Max length 32 symbols")
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, "Use characters and numbers"),

  email: yup
    .string()
    .required("Please enter a email")
    .email("Enter a correct email")
    .min(8, "Min length 8 symbols")
    .max(32, "Max length 32 symbols"),
});
function Registration() {
  return (
    <>
      <AuthWrapComponent>
        <Navigation />
        <StyledHeaderAuth></StyledHeaderAuth>
        <Formik validationSchema={schema}>
          <StyledFormAuth>
            <StyledWrapInputAuth>
              <StyledInputAuth
                type="text"
                name="username"
                placeholder="Enter your name"
              />
              <StyledLabelAuth></StyledLabelAuth>
              <ErrorMessage name="username">
                {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
              </ErrorMessage>
            </StyledWrapInputAuth>

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
                type="password"
                name="password"
                placeholder="Create a password"
                // pattern="/^[a-zA-Z0-9]{8,16}$/"
                // minlength="8"
              />
              <StyledLabelAuth></StyledLabelAuth>

              <ErrorMessage name="password">
                {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
              </ErrorMessage>
            </StyledWrapInputAuth>
            <StyledWrapAuthBtn>
              <StyledBtnAuthAccent type="submit">
                Register Now
              </StyledBtnAuthAccent>
              {/* <StyledLinkAuth to="/login">Log in</StyledLinkAuth> */}
            </StyledWrapAuthBtn>
          </StyledFormAuth>
        </Formik>
      </AuthWrapComponent>
    </>
  );
}

export default Registration;
