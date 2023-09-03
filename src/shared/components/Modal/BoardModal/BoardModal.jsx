import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Formik, Form } from 'formik';
import icon from '../../../images/icons.svg';
import data from '../../../../hepers/background.json';
import PropTypes from 'prop-types';
import { TitleHelp, FormField, InputField, SubmitButton, Row, RadioLabel, BackgroundIcon, IconContainer, Svg, BoardText, RadioField } from './BoardModal.styled';
import { addDashboardThunk, updateDashboardThunk } from '../../../../redux/dashboards/operations'; 

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

function BoardModal({ onClose, isEditMode }) {
  const dispatch = useDispatch()
  // const allDashboardsData = useSelector(allDashboards);
  // const initialDashboardData = allDashboardsData.find(dashboard => dashboard._id === dashboardId);

  const handleSubmit = async (values, { setSubmitting }) => {
  
     

      // const token = localStorage.getItem('accessToken'); 
      // let response;

      if (isEditMode) {
        // response = await axios.put(
        //   `https://taskpro-backend-c73a.onrender.com/api/dashboard/${dashboardId}`,
        //   values,
        //   {
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //     },
        //   }
        // );
      } else {
        console.log(values)
        dispatch(addDashboardThunk(values)).then(onClose());
      }

      

    //   if (response.status === 200 || response.status === 201) {
    //     console.log(isEditMode ? "Доска обновлена" : "Доска создана");
    //     onClose();
    //   } else {
    //     console.error("Неожиданный ответ от сервера:", response);
    //   }
    // } catch (error) {
    //   console.error(isEditMode ? "Ошибка при обновлении доски:" : "Ошибка при создании доски:", error);
    // } finally {
       setSubmitting(false);
    // }
  };

  return (
    <>
      <TitleHelp>{isEditMode ? "Edit board" : "New board"}</TitleHelp>

      <Formik
        initialValues={{
           title: '',
           icon: '',
        
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
    <RadioLabel key={index} onClick={() => setFieldValue("background", item.icon)}>
      <RadioField name="background" type="radio" value={item.icon} />
      <IconContainer isSelected={values.background === item.icon}>
        <BackgroundIcon src={item.icon} alt={`Background ${index + 1}`} />
      </IconContainer>
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

BoardModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool,
  dashboardId: PropTypes.string,
};

export default BoardModal;