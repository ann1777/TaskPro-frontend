import { TitleHelp, StyledForm, FormField, InputField, SubmitButton } from './ColumnModal.styled';
import { Formik, ErrorMessage } from 'formik';
import axios from 'axios';
import PropTypes from 'prop-types';

function ColumnModal({ onCloseModal, isEditMode, columnId}) {
  

  const handleOnSubmit = async (values, { setSubmitting }) => {
    try {
      const dashboardId = getDashboardIdFromURL();
      const token = localStorage.getItem('accessToken');

      let response;
      if (isEditMode) {
        response = await axios.put(
          `https://taskpro-backend-c73a.onrender.com/api/column/${dashboardId}/${columnId}`,
          { title: values.Title },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          }
        );
      } else {
        response = await axios.post(
          `https://taskpro-backend-c73a.onrender.com/api/column/${dashboardId}`,
          { title: values.Title },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          }
        );
       
      }

      console.log('Ответ сервера:', response.data);

      onCloseModal();
    } catch (error) {
      console.error('Ошибка:', error);
    }

    setSubmitting(false);
  };

  const getDashboardIdFromURL = () => {
    const pathnameParts = window.location.pathname.split('/');
    const dashboardId = pathnameParts[pathnameParts.length - 1];
    return dashboardId;
  };

  return (
    <>
      <TitleHelp>{isEditMode ? 'Edit column' : 'Add column'}</TitleHelp>
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
              {isEditMode ? 'Save' : 'Add'}
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}
ColumnModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool,
  columnId: PropTypes.string
};


export default ColumnModal;