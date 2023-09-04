import PropTypes from 'prop-types';
import { TitleHelp, StyledForm, FormField, SubmitButton, ButtonContainer, CancelButton } from './DeleteModal.styled';
import { useDispatch } from 'react-redux';
import { deleteDashboardThunk, deleteCardThunk, deleteColumnThunk } from '../../../../redux/dashboards/operations';

export default function DeleteModal({ onCloseModal, dashboardId, cardId, columnId }) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
     e.preventDefault();
    if (dashboardId && !columnId && !cardId) {
        dispatch(deleteDashboardThunk(dashboardId));
    } else if (dashboardId && columnId && !cardId) {
        dispatch(deleteColumnThunk(dashboardId,columnId));
    } else if (dashboardId && columnId && cardId) {
        dispatch(deleteCardThunk(dashboardId, columnId, cardId));
    }

    onCloseModal();  
  };
  let itemToDelete;

if (dashboardId && !columnId && !cardId) {
    itemToDelete = 'доску';
} else if (dashboardId && columnId && !cardId) {
    itemToDelete = 'колонку';
} else if (dashboardId && columnId && cardId) {
    itemToDelete = 'карточку';
}

  return (
    <>
      <TitleHelp>Delete</TitleHelp>
      <StyledForm>
        <FormField>
         Вы действительно хотите удалить {itemToDelete}?
        </FormField>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ButtonContainer>
          <SubmitButton svg={false}  type='submit' onClick={handleDelete} >
            Удалить
          </SubmitButton>
          <CancelButton svg={false} type='submit' onClick={onCloseModal}>
            Отмена
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