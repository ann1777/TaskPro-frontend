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
  LinkItem,
  LinkList,
  LinkNav,
  WrapperForm,
  AuthFormPasswordIcon,
  StyledEyeIcon,
  StyledEyeIconVis,
} from "../Login/Login.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../../redux/auth/operations";

let schema = yup.object({
  name: yup
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
const initialValues = {
  name: "",
  email: "",
  password: "",
  showPassword: false,
};

function Registration() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const onSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    console.log(name, email, password);
    dispatch(
      signup({
        name,
        email,
        password,
      })
    );
    resetForm();
  };

  return (
    <>
      <WrapperForm>
        <AuthWrapComponent>
          <LinkList>
            <LinkNav>
              <LinkItem to="/registration" replace>
                Registration
              </LinkItem>
            </LinkNav>
            <LinkNav>
              <LinkItem to="/login" replace>
                Log In
              </LinkItem>
            </LinkNav>
          </LinkList>
          <StyledHeaderAuth></StyledHeaderAuth>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={onSubmit}
          >
            <StyledFormAuth>
              <StyledWrapInputAuth>
                <StyledInputAuth
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
                <StyledLabelAuth></StyledLabelAuth>
                <ErrorMessage name="name">
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
                  className="no-bottom-padding"
                  name="password"
                  placeholder="Create a password"
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
                <StyledBtnAuthAccent type="submit">
                  Register Now
                </StyledBtnAuthAccent>
                {/* <StyledLinkAuth to="/login">Log in</StyledLinkAuth> */}
              </StyledWrapAuthBtn>
            </StyledFormAuth>
          </Formik>
        </AuthWrapComponent>
      </WrapperForm>
    </>
  );
}

export default Registration;
