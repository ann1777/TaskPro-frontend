import PropTypes from 'prop-types';
import {
  TitleHelp,
  StyledForm,
  FormField,
  InputField,
  SubmitButton,
} from './EditColumn.styled';
import { Formik, ErrorMessage } from 'formik';

function EditColumn({ onClose }) {
  return (
    <>
      <TitleHelp>Edit column</TitleHelp>
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
                name='Title'
                type='text'
                placeholder='Title'
              />
              <ErrorMessage name='title' component='div' />
            </FormField>
            <SubmitButton disabled={isSubmitting}>Add</SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

EditColumn.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EditColumn;
