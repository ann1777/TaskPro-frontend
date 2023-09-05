import PropTypes from 'prop-types';
import { TitleHelp, StyledForm, FormField, SubmitButton, ButtonContainer, CancelButton } from './DeleteModal.styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteDashboardThunk, deleteCardThunk, deleteColumnThunk } from '../../../../redux/dashboards/operations';

export default function DeleteModal({ onCloseModal, dashboardId, cardId, columnId }) {
  console.log(dashboardId, columnId, cardId)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleDelete = (e) => {
    e.preventDefault();
    if (dashboardId && !columnId && !cardId) {
  dispatch(deleteDashboardThunk(dashboardId)).then(() => {
        navigate('/home');
      });
} else if (dashboardId && columnId && !cardId) {
  dispatch(deleteColumnThunk({ dashboardId, columnId })); 
} else if (dashboardId && columnId && cardId) {
  dispatch(deleteCardThunk({ dashboardId, columnId, cardId }));
}

    onCloseModal();
  };
  let itemToDelete;

  if (dashboardId && !columnId && !cardId) {
    itemToDelete = 'board';
  } else if (dashboardId && columnId && !cardId) {
    itemToDelete = 'column';
  } else if (dashboardId && columnId && cardId) {
    itemToDelete = 'card';
  }

  return (
    <>
      <TitleHelp>Delete</TitleHelp>
      <StyledForm>
        <FormField>
          Are you sure you want to delete the {itemToDelete}?
        </FormField>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ButtonContainer>
            <SubmitButton svg={false} type='submit' onClick={handleDelete}>
              Delete
            </SubmitButton>
            <CancelButton svg={false} type='submit' onClick={onCloseModal}>
              Cancel
            </CancelButton>
          </ButtonContainer>
        </div>
      </StyledForm>
    </>
  );
}
DeleteModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  dashboardId: PropTypes.string,
  cardId: PropTypes.string,
  columnId: PropTypes.string,


};