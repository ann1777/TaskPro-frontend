import { useState } from 'react'; // Импорт useState
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
} from './AddCard.styled';
import { Formik, ErrorMessage } from 'formik';
import {getPriorityStyles}  from '../../../../hepers/getPriorityStyles';
import TaskCalendar from '../../TaskCalendar/TaskCalendar';

function AddCard({ onClose }) {
  const labels = [
    { value: 'low' },
    { value: 'medium' },
    { value: 'high' },
    { value: 'without' },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date()); // Использование useState для даты

  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <TitleHelp>Add card</TitleHelp>
      <Formik
        initialValues={{
          email: '',
          comment: '',
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <FormField>
              <InputField autoFocus name="Title" type="text" placeholder="Title" />
              <ErrorMessage name="email" component="div" />
            </FormField>
            <FormField>
              <Textarea name="Desc" component="textarea" placeholder="Description" />
              <ErrorMessage name="description" component="div" />
            </FormField>
            <LabelTitle>Label color</LabelTitle>
            <Labels>
              {labels.slice().map(({ value }) => (
                <div style={{ display: 'flex' }} key={value}>
                  <RadioLabel buttoncolor={getPriorityStyles(value)} className="inputlabel">
                    <LabelRadiobutton
                      buttoncolor={getPriorityStyles(value)}
                      name="label"
                      type="radio"
                      value={value}
                    />
                    <Checkmark buttoncolor={getPriorityStyles(value)}></Checkmark>
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

            <SubmitButton disabled={isSubmitting}>Add</SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

export default AddCard;