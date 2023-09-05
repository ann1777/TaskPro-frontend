
import { TitleHelp, StyledForm, FormField, InputField, SubmitButton } from './ColumnModal.styled';
import { Formik, ErrorMessage } from 'formik';

import PropTypes from 'prop-types';
import { addColumnThunk, updateColumnThunk } from '../../../../redux/dashboards/operations';
import { useDispatch } from "react-redux";



function ColumnModal({ onCloseModal, isEditMode, columnId, columnTitle}) {
  const getDashboardIdFromURL = () => {
    const pathnameParts = window.location.pathname.split('/');
    const dashboardId = pathnameParts[pathnameParts.length - 1];
    return dashboardId;
  };
  const dashboardId = getDashboardIdFromURL();
  
  const dispatch = useDispatch();
  const handleOnSubmit = async (values) => {
   const actualTitle = values.Title;
  
    if (isEditMode) {
     const updateData = {
       title: actualTitle,
     
      };
      console.log(updateData)
      dispatch(updateColumnThunk({ columnId: columnId, dashboardId, updateData }));
      
  
    }
    else {
     
const data = {
  title: actualTitle,
  dashboardId: dashboardId
};

dispatch(addColumnThunk(data));
    }


      onCloseModal();
    } 

    
   

  return (
    <>
      <TitleHelp>{isEditMode ? 'Edit column' : 'Add column'}</TitleHelp>
      <Formik
        initialValues={{ Title: isEditMode ? columnTitle : '' }}
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
  columnId: PropTypes.string,
  dashboardId: PropTypes.string,
  columnTitle: PropTypes.string,
};

export default ColumnModal;