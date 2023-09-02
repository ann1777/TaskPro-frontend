import PropTypes from 'prop-types';
import { TitleHelp, StyledForm, FormField, SubmitButton } from './DeleteModal.styled';

function ConfirmDeleteModal({ onCloseModal }) {
  return (
    <>
      <TitleHelp>Удалить</TitleHelp>
      <StyledForm>
        <FormField>
          Вы действительно хотите удалить?
        </FormField>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <SubmitButton onClick={onCloseModal} style={{ background: 'red' }}>
            Удалить
          </SubmitButton>
          <SubmitButton onClick={onCloseModal}>
            Отмена
          </SubmitButton>
        </div>
      </StyledForm>
    </>
  );
}

ConfirmDeleteModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default ConfirmDeleteModal;
