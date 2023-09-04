import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  TitleHelp,
  StyledForm,
  FormField,
  InputField,
  SubmitButton,
  DedlineTitle,
  Checkmark,
  Textarea,
  RadioLabel,
  LabelTitle,
  Labels,
  LabelRadiobutton,
} from './CardModal.styled';
import { Formik, ErrorMessage } from 'formik';
import { getPriorityStyles } from '../../../../hepers/getPriorityStyles';
import TaskCalendar from '../../TaskCalendar/TaskCalendar';
import { addCardThunk, updateCardThunk } from '../../../../redux/dashboards/operations';

function CardModal({ onCloseModal, isEditMode, columnId, cardId }) {
  const labels = [
    { value: 'low' },
    { value: 'medium' },
    { value: 'high' },
    { value: 'without' },
  ];
  

  const dispatch = useDispatch();
  const card = useSelector(state => state.dashboards.singleCard);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPriority, setSelectedPriority] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePriorityChange = (value) => {
    setSelectedPriority(value);
  };

  const idColumn = columnId
        console.log(idColumn)

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const cardData = {
        title: values.Title,
        description: values.Desc,
        priority: selectedPriority,
        deadline: selectedDate,
      };

      if (isEditMode) {
        
        dispatch(updateCardThunk({ columnId: idColumn, cardId, updateData: cardData  }));
      } else {
        
       dispatch(addCardThunk({ columnId: idColumn, cardData: cardData }));
      }

      onCloseModal();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <TitleHelp>{isEditMode ? 'Edit card' : 'Add card'}</TitleHelp>
      <Formik
        initialValues={{
          Title: isEditMode && card ? card.title : '',
          Desc: isEditMode && card ? card.description : '',
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <FormField>
              <InputField autoFocus name='Title' type='text' placeholder='Title' />
              <ErrorMessage name='Title' component='div' />
            </FormField>
            <FormField>
              <Textarea name='Desc' component='textarea' placeholder='Description' />
              <ErrorMessage name='Desc' component='div' />
            </FormField>
            <LabelTitle>Label color</LabelTitle>
            <Labels>
              {labels.map(({ value }) => (
                <div style={{ display: 'flex' }} key={value}>
                  <RadioLabel
                    backgroundColor={getPriorityStyles(value)}
                    className='inputlabel'
                    onClick={() => handlePriorityChange(value)}
                  >
                    <LabelRadiobutton name='label' type='radio' value={value} />
                    <Checkmark
                      backgroundColor={getPriorityStyles(value)}
                      checked={selectedPriority === value}
                    />
                  </RadioLabel>
                </div>
              ))}
            </Labels>
            <DedlineTitle>Deadline</DedlineTitle>
            <TaskCalendar
              dateChange={handleDateChange}
              initialDate={selectedDate}
            />
            <div style={{ height: '40px' }}></div>
            <SubmitButton type='submit' disabled={isSubmitting}>
              {isEditMode ? 'Edit' : 'Add'}
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

CardModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool,
  columnId: PropTypes.string,
  cardId: PropTypes.string,
};

export default CardModal;