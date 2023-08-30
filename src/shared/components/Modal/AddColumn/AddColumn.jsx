import { TitleHelp, StyledForm, FormField, InputField, SubmitButton } from './AddColumn.styled';
import { Formik, ErrorMessage } from 'formik';
import axios from 'axios';

function AddColumn({ onCloseModal }) {
  const handleOnSubmit = async (values, { setSubmitting }) => {
    try {
      const dashboardId = getDashboardIdFromURL();
      
  
      const token = localStorage.getItem('accessToken');

      const response = await axios.post(
        `https://taskpro-backend-c73a.onrender.com/api/column/${dashboardId}`,
        { title: values.Title },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );

      console.log('Ответ сервера:', response.data);
      
     onCloseModal()

    } catch (error) {
      console.error('Ошибка:', error);
    }

    setSubmitting(false);
    return false;
  };

  const getDashboardIdFromURL = () => {
    const pathnameParts = window.location.pathname.split('/');
    const dashboardId = pathnameParts[pathnameParts.length - 1];
    return dashboardId;
  };

  return (
    <>
      <TitleHelp>Add column</TitleHelp>
      <Formik
        initialValues={{ Title: '' }}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <FormField>
              <InputField
                autoFocus
                name="Title"
                type="text"
                placeholder="Title"
              />
              <ErrorMessage name="Title" component="div" />
            </FormField>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Add
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

export default AddColumn;