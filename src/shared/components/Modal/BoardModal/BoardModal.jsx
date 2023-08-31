import axios from 'axios';
import { Formik, Form } from 'formik';
import icon from '../../../images/icons.svg';
import data from '../../../../hepers/bacground.json';  

import {
  TitleHelp,
  FormField,
  InputField,
  SubmitButton,
  Row,
  RadioLabel,
  BackgroundIcon,
  IconContainer,
  Svg,
  BoardText,
  RadioField,
} from './BoardModal.styled';

const BOARD_ICONS = [
  'icon-Project',
  'icon-star-04',
  'icon-loading-03',
  'icon-puzzle-piece-02',
  'icon-container',
  'icon-lightning-02',
  'icon-colors',
  'icon-hexagon-01',
];

function BoardModal({ onClose, isEditMode, dashboardId }) {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("Submitting values:", values);

      const token = localStorage.getItem('accessToken'); 
      let response;

           if (isEditMode) {
          response = await axios.put(
        `https://taskpro-backend-c73a.onrender.com/api/dashboard/${dashboardId}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else {
      response = await axios.post(
        'https://taskpro-backend-c73a.onrender.com/api/dashboard/',
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
        }
        console.log('Response from the server:', response.data);

      if (response.status === 200 || response.status === 201) {
        console.log(isEditMode ? "Доска обновлена" : "Доска создана");
        onClose();
      } else {
        console.error("Неожиданный ответ от сервера:", response);
      }
    } catch (error) {
      console.error(isEditMode ? "Ошибка при обновлении доски:" : "Ошибка при создании доски:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <TitleHelp>{isEditMode ? "Edit board" : "New board"}</TitleHelp>

      <Formik
        initialValues={{
          title: '',
         
          icon: BOARD_ICONS[0],
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <FormField>
              <InputField autoFocus name="title" component="input" placeholder="Title" />
            </FormField>

            <BoardText>Icons</BoardText>
            <Row>
              {BOARD_ICONS.map(id => (
                <RadioLabel key={id} onClick={() => setFieldValue("icon", id)}>
                  <RadioField name="icon" type="radio" value={id} />
                  <IconContainer isSelected={values.icon === id}>
                    <Svg>
                      <use xlinkHref={`${icon}#${id}`} />
                    </Svg>
                  </IconContainer>
                </RadioLabel>
              ))}
            </Row>

            <BoardText>Background</BoardText>
            <Row>
              {data.map((item, index) => (
                <RadioLabel key={index} onClick={() => setFieldValue("background", item.url)}>
                  <RadioField name="background" type="radio" value={item.url} />
                  <BackgroundIcon src={item.url} alt={`Background ${index + 1}`} />
                </RadioLabel>
              ))}
            </Row>

            <SubmitButton type="submit" disabled={isSubmitting}>Create</SubmitButton>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default BoardModal;