import { useState } from 'react';
import PropTypes from 'prop-types';
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
import axios from 'axios';
import { getPriorityStyles } from '../../../../hepers/getPriorityStyles';
import TaskCalendar from '../../TaskCalendar/TaskCalendar';

function CardModal({ onCloseModal, editMode, columnId }) {
  const labels = [
    { value: 'low' },
    { value: 'medium' },
    { value: 'high' },
    { value: 'without' },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPriority, setSelectedPriority] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePriorityChange = (value) => {
    setSelectedPriority(value);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
  try {
    const token = localStorage.getItem('accessToken');

    const payload = {
      title: values.Title,
      description: values.Desc,
      priority: selectedPriority,
      deadline: selectedDate, 
    };

    const response = await axios.post(
      `https://taskpro-backend-c73a.onrender.com/api/card/${columnId}`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    console.log('Ответ от бекенда:', response.data);
    setSubmitting(false);
    onCloseModal();

  } catch (error) {
    console.error('Error:', error);
  } 
};

  return (
    <>
      <TitleHelp>{editMode ? 'Edit card' : 'Add card'}</TitleHelp>
      <Formik
        initialValues={{
          Title: '',
          Desc: '',
          
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
              {editMode ? 'Save' : 'Add'}
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

CardModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  editMode: PropTypes.bool,
  columnId: PropTypes.string,
};

export default CardModal;