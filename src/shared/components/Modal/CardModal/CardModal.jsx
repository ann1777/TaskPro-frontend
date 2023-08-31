import  { useState } from 'react';
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
  LabelRadiobutton
  
} from './CardModal.styled';
import { Formik, ErrorMessage } from 'formik';
import { getPriorityStyles } from '../../../../hepers/getPriorityStyles';
import TaskCalendar from '../../TaskCalendar/TaskCalendar';

function CardModal({ onCloseModal, editMode }) {
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
    onCloseModal();
  };

  const handlePriorityChange = (value) => {
    setSelectedPriority(value);
  };

  return (
    <>
      <TitleHelp>{editMode ? 'Edit card' : 'Add card'}</TitleHelp>
      <Formik
        initialValues={{
          Title: '',
          Desc: '',
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <FormField>
              <InputField
                autoFocus
                name='Title'
                type='text'
                placeholder='Title'
              />
              <ErrorMessage name='Title' component='div' />
            </FormField>
            <FormField>
              <Textarea
                name='Desc'
                component='textarea'
                placeholder='Description'
              />
              <ErrorMessage name='Desc' component='div' />
            </FormField>
            <LabelTitle>Label color</LabelTitle>
            <Labels>
              {labels.map(({ value }) => (
                <div style={{ display: 'flex' }} key={value}>
                  <RadioLabel
                    backgroundColor={getPriorityStyles(value)}
                    className='inputlabel'
                    checked={selectedPriority === value}
                    onClick={() => handlePriorityChange(value)}
                  >
                    <LabelRadiobutton
                      backgroundColor={getPriorityStyles(value)}
                      name='label'
                      type='radio'
                      value={value}
                    />
                    <Checkmark
                      backgroundColor={getPriorityStyles(value)}
                      checked={selectedPriority === value}
                    ></Checkmark>
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
            <SubmitButton disabled={isSubmitting}>
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
};

export default CardModal;
