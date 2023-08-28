import { TitleHelp, StyledForm, FormField, InputField, SubmitButton, Textarea, Row, BoardText, RadioLabel} from './AddCard.styled';
import { Formik, ErrorMessage } from 'formik';

function AddCard({ onClose }) {
  return (
    <>
      <TitleHelp>Add card</TitleHelp>
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
              <ErrorMessage name="email" component="div" />
            </FormField>
            <FormField>
              <Textarea
                name="Desc"
                component="textarea"
                placeholder="Description"
              />
                          <ErrorMessage name="description" component="div" />
                          <BoardText>Icons</BoardText>
              <Row>
               
              <RadioLabel></RadioLabel>
              </Row>

            </FormField>
            <SubmitButton disabled={isSubmitting}>Add</SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

export default AddCard;