import PropTypes from 'prop-types';
import {
  TitleHelp,
  StyledForm,
  FormField,
  InputField,
  SendButton,
  Textarea,
} from './NeedHelp.styled';
import { Formik, ErrorMessage } from 'formik';

function NeedHelp({ onClose }) {
  return (
    <>
      <TitleHelp>Need help</TitleHelp>
      <Formik
        initialValues={{
          email: '',
          comment: '',
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm onChange={() => setErrorMessage(null)}>
            <FormField>
              <InputField
                autoFocus
                name='email'
                type='email'
                placeholder='Email address'
              />
              <ErrorMessage name='email' component='div' />
            </FormField>
            <FormField>
              <Textarea
                name='comment'
                component='textarea'
                placeholder='Comment'
              />
              <ErrorMessage name='comment' component='div' />
            </FormField>
            <SendButton disabled={isSubmitting} onSubmit={onClose}>
              Send
            </SendButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

NeedHelp.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NeedHelp;
