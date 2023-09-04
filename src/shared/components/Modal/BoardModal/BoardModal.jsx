import { Formik, Form } from "formik";
import icon from "../../../images/icons.svg";
import data from "../../../../hepers/background.json";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addDashboardThunk, updateDashboardThunk, getDashboardByIdThunk  } from "../../../../redux/dashboards/operations";
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
  RowBack,
} from "./BoardModal.styled";

const BOARD_ICONS = [
  "icon-Project",
  "icon-star-04",
  "icon-loading-03",
  "icon-puzzle-piece-02",
  "icon-container",
  "icon-lightning-02",
  "icon-colors",
  "icon-hexagon-01",
];
const initialValues = {
    title: "",
    icon: BOARD_ICONS[0],
    background: data[0].icon
  };


function BoardModal({ onClose, isEditMode, dashboardId }) {
  const [dashboardData, setDashboardData] = useState();
  const [formInitialValues, setFormInitialValues] = useState(initialValues);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (isEditMode && dashboardId) {
      dispatch(getDashboardByIdThunk(dashboardId))
        .unwrap()
        .then(data => {
          setDashboardData(data);
          setFormInitialValues({
            title: data.title,
            icon: data.icon,
            background: data.background
          });
        })
        .catch(error => {
          console.error("Error Get:", error);
        });
    } else {
      setFormInitialValues(initialValues);
    }
  }, [isEditMode, dashboardId, dispatch]);

  const handleSubmit = async (values) => {
    if (isEditMode) {
      const updateData = {
        ...values,
      };
      dispatch(updateDashboardThunk({ dashboardId, updateData })).then(handleFormClose());
    } else {
      dispatch(addDashboardThunk(values)).then(handleFormClose());
    }
  };

  const handleFormClose = () => {
    setDashboardData(null);
    onClose();
  };
    return (
    <div>
      <TitleHelp>{isEditMode ? "Edit board" : "New board"}</TitleHelp>
       <Formik
        key={formInitialValues.title}
      initialValues={formInitialValues}
      onSubmit={handleSubmit}
    >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <FormField>
              <InputField
                autoFocus
                name="title"
                component="input"
                placeholder="Title"
              />
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
            <RowBack>
              {data.map((item, index) => (
                <RadioLabel
                  key={index}
                  onClick={() => setFieldValue("background", item.icon)}
                >
                  <RadioField
                    name="background"
                    type="radio"
                    value={item.icon}
                  />
                  <BackgroundIcon
                    src={item.icon}
                    alt={`Background ${index + 1}`}
                    isSelected={values.background === item.icon}
                  />
                </RadioLabel>
              ))}
            </RowBack>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isEditMode ? "Update" : "Create"}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}
BoardModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool,
  dashboardId: PropTypes.string,
};

export default BoardModal 