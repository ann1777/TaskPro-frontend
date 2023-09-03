import axios from "axios";
import { Formik, Form } from "formik";
import icon from "../../../images/icons.svg";
import data from "../../../../hepers/background.json";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { addDashboardThunk } from "../../../../redux/dashboards/operations";

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

function BoardModal({ onClose, isEditMode }) {
  const dispatch = useDispatch();
  const handleSubmit = async (values, { setSubmitting }) => {
    dispatch(addDashboardThunk(values)).then(onClose());
  };

  return (
    <>
      <TitleHelp>{isEditMode ? "Edit board" : "New board"}</TitleHelp>

      <Formik
        initialValues={{
          title: "",

          icon: BOARD_ICONS[0],
        }}
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
              {BOARD_ICONS.map((id) => (
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
              Create
            </SubmitButton>
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
