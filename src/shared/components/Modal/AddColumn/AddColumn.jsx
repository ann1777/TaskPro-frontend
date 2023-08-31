import PropTypes from 'prop-types';
import {
  TitleHelp,
  StyledForm,
  FormField,
  InputField,
  SubmitButton,
} from './AddColumn.styled';
import { Formik, ErrorMessage } from 'formik';

function AddColumn({ onClose }) {
  const handleOnSubmit = async (values) => {
    try {
      const response = await fetch(
        `https://taskpro-backend-c73a.onrender.com/api/column/${dashboardId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: values.Title }),
        }
      );
      const data = await response.json();
      console.log('Server response:', data);
      if (!response.ok) {
        throw new Error('Failed to add column');
      }
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <TitleHelp>Add column</TitleHelp>
      <Formik initialValues={{ Title: '' }} onSubmit={handleOnSubmit}>
        {({ isSubmitting }) => (
          <StyledForm>
            <FormField>
              <InputField
                autoFocus
                name='Title'
                type='text'
                placeholder='Title'
              />
              <ErrorMessage name='Title' component='div' />
            </FormField>
            <SubmitButton type='submit' disabled={isSubmitting}>
              Add
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

AddColumn.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddColumn;
