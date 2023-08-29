import { TitleHelp, StyledForm, FormField, InputField, SubmitButton} from './AddColumn.styled';
import { Formik, ErrorMessage } from 'formik';

function AddColumn({ onClose }) {
  return (
    <>
      <TitleHelp>Add column</TitleHelp>
      <Formik
        initialValues={{
          email: '',
          comment: ''
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm onChange={() => setErrorMessage(null)}>
            <FormField>
              <InputField
                autoFocus
                name="Title"
                type="text"
                placeholder="Title"
              />
              <ErrorMessage name="title" component="div" />
            </FormField>
            <SubmitButton disabled={isSubmitting}>Add</SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

export default AddColumn;