import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectUserTheme } from "../../../../redux/auth/authSelectors";
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
} from "./CardModal.styled";
import { Formik, ErrorMessage } from "formik";
import { getPriorityStyles } from "../../../../hepers/getPriorityStyles";
import TaskCalendar from "../../TaskCalendar/TaskCalendar";
import {
  addCardThunk,
  updateCardThunk,
} from "../../../../redux/dashboards/operations";
import { toast } from "react-toastify";

function CardModal({ onCloseModal, isEditMode, columnId, cardId, card }) {
  const labels = [
    { value: "low" },
    { value: "medium" },
    { value: "high" },
    { value: "without" },
  ];

  const dispatch = useDispatch();
  const activeUserTheme = useSelector(selectUserTheme);

  const [selectedDate, setSelectedDate] = useState(
    isEditMode && card ? new Date(card.deadline) : new Date()
  );
  const [selectedPriority, setSelectedPriority] = useState(
    isEditMode && card ? card.priority : ""
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePriorityChange = (value) => {
    setSelectedPriority(value);
  };

  const idColumn = columnId;

 const handleSubmit = async (values, { setSubmitting }) => {
  try {
    if (!values.Title) {
      toast.error("Card title is required!");
      return;
    }

    if (!selectedPriority) {
      toast.error("Card priority is required!");
      return;
    }

    const cardData = {
      title: values.Title,
      description: values.Desc,
      priority: selectedPriority,
      deadline: selectedDate,
    };

    if (isEditMode) {
      dispatch(
        updateCardThunk({ columnId: idColumn, cardId, updateData: cardData })
      );
    } else {
      dispatch(addCardThunk({ columnId: idColumn, cardData: cardData }));
    }

    onCloseModal();
  } catch (error) {
    console.error("Error:", error);
  } finally {
    setSubmitting(false);
  }
};

  return (
    <>
      <TitleHelp>{isEditMode ? "Edit card" : "Add card"}</TitleHelp>
      <Formik
        initialValues={{
          Title: isEditMode && card ? card.title : "",
          Desc: isEditMode && card ? card.description : "",
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <FormField>
              <InputField
                autoFocus
                name="Title"
                type="text"
                placeholder="Title"
              />
              <ErrorMessage name="Title" component="div" />
            </FormField>
            <FormField>
              <Textarea
                name="Desc"
                component="textarea"
                placeholder="Description"
              />
              <ErrorMessage name="Desc" component="div" />
            </FormField>
            <LabelTitle>Label color</LabelTitle>
            <Labels>
              {labels.map(({ value }) => (
                <div style={{ display: "flex" }} key={value}>
                  <RadioLabel
                     bgcolor={getPriorityStyles(value, activeUserTheme)}
                    className="inputlabel"
                    onClick={() => handlePriorityChange(value)}
                  >
                    <LabelRadiobutton
                      name="label"
                      type="radio"
                      value={value}
                    />
                    <Checkmark
                      bgcolor={getPriorityStyles(
                        value,
                        activeUserTheme
                      )}
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
            <div style={{ height: "40px" }}></div>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isEditMode ? "Edit" : "Add"}
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
  card: PropTypes.object,
};

export default CardModal;
