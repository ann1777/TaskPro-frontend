import PropTypes from 'prop-types';
import { TitleHelp, StyledForm, FormField, SubmitButton, ButtonContainer, CancelButton } from './DeleteModal.styled';
import { useDispatch } from 'react-redux';
import { deleteDashboardThunk } from '../../../../redux/dashboards/operations';

export default function DeleteModal({ onCloseModal, dashboardId }) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
     e.preventDefault();
    dispatch(deleteDashboardThunk(dashboardId));
    onCloseModal();  
  };

  return (
    <>
      <TitleHelp>Удалить</TitleHelp>
      <StyledForm>
        <FormField>
          Вы действительно хотите удалить?
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
  dashboardId: PropTypes.object.isRequired,  
};