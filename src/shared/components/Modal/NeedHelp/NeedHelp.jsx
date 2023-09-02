import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TitleHelp,
  StyledForm,
  FormField,
  InputField,
  SendButton,
  Textarea,
} from "./NeedHelp.styled";
import { Formik, Field, ErrorMessage } from "formik";
import { selectUserEmail } from "../../../../redux/auth/authSelectors";

const NeedHelp = ({ onClose }) => {
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async ({ comment }) => {
    const token = localStorage.getItem("accessToken");

    const userEmail = selectUserEmail; // 'me' represents the authenticated user

    const message = {
      raw: window.btoa(
        `From: YOUR_EMAIL\r\nTo: taskpro.project1@gmail.com\r\nSubject: Help Request\r\n\r\n${comment}`
      ),
    };
    const response = await fetch(
      `https://gmail.googleapis.com/gmail/v1/users/${userEmail}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      }
    );

    if (response.ok) {
      console.log("Email sent successfully!");
      setComment("");
      setErrorMessage("");
    } else {
      console.error(
        "Failed to send email:",
        response.status,
        response.statusText
      );
      setErrorMessage("Failed to send email");
    }
  };
  setSubmitting(false);

  return (
    <>
      <TitleHelp>Need help</TitleHelp>
      <Formik
        initialValues={{
          email: "",
          comment: "",
        }}
        onSubmit={sendEmail}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <FormField>
              <InputField
                autoFocus
                name="email"
                type="email"
                placeholder="Email address"
              />
              <ErrorMessage name="email" component="div" />
            </FormField>
            <FormField>
              <Textarea
                name="comment"
                component={Field}
                placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onChange={setComment}
              />
              <ErrorMessage name="comment" component="div" />
            </FormField>
            <SendButton
              disabled={isSubmitting}
              onSubmit={sendEmail}
              onClose={onClose}
            >
              Send
            </SendButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

NeedHelp.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NeedHelp;
