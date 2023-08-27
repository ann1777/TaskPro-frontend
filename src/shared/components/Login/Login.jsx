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
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { signin } from "../../../redux/auth/operations.js";
import { useDispatch } from "react-redux";
import NavAuth from "../Navigation/NavAuth.jsx";
import { useNavigate } from "react-router-dom";

let schema = yup.object({
  password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Min length 8 symbols")
    .max(32, "Max length 32 symbols")
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, "a-z and 0-9"),

  email: yup
    .string()
    .required("Please enter an email")
    .email("Enter a correct email")
    .min(8, "Min length 8 symbols")
    .max(32, "Max length 32 symbols"),
});

const initialValues = {
  email: "",
  password: "",
  showPassword: false,
};

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values, { resetForm }) => {
    const { email, password } = values;
    const resultAction = await dispatch(signin({ email, password }));
    if (signin.fulfilled.match(resultAction)) {
      navigate("/home");
    } else if (signin.rejected.match(resultAction)) {
      console.log(resultAction.error.message);
    }
    resetForm();
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
                <StyledBtnAuthAccent type="submit">
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
