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
} from "./Login.styled.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";

let schema = yup.object({
  password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Min length 8 symbols")
    .max(32, "Max length 32 symbols")
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, "a-z and 0-9"),

  email: yup
    .string()
    .required("Please enter a email")
    .email("Enter a correct email")
    .min(8, "Min length 8 symbols")
    .max(32, "Max length 32 symbols"),
});

function Login() {
  return (
    <>
      <AuthWrapComponent>
        <Navigation />
        <StyledHeaderAuth></StyledHeaderAuth>
        <Formik validationSchema={schema}>
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
                type="password"
                name="password"
                placeholder="Confirm a password"
              />
              <StyledLabelAuth></StyledLabelAuth>
              <ErrorMessage name="password">
                {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
              </ErrorMessage>
            </StyledWrapInputAuth>
            <StyledWrapAuthBtn>
              <StyledBtnAuthAccent type="submit">
                Log In Now
              </StyledBtnAuthAccent>
              {/* <StyledLinkAuth to="/registration">Register</StyledLinkAuth> */}
            </StyledWrapAuthBtn>
          </StyledFormAuth>
        </Formik>
      </AuthWrapComponent>
    </>
  );
}

export default Login;
