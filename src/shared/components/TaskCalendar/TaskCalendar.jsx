import { useState, forwardRef } from "react";

import "react-datepicker/dist/react-datepicker.css";

import { format, isToday } from "date-fns";
import { BsChevronDown } from "react-icons/bs";
import { Calendar, DatePickerWrapper, Popper } from "./TaskCalendar.styled";

const TaskCalendar = ({ dateChange, initialDate }) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const formatDate = (date) => {
    if (isToday(date)) {
      return `Today, ${format(date, "MMMM d")}`;
    }
    return format(date, "EEEE, MMMM d");
  };

  const onDateChange = (date) => {
    const clearedDate = new Date(date.setHours(0, 0, 0, 0));
    setSelectedDate(clearedDate);
    dateChange(clearedDate);
  };

  const InputOutputBtn = forwardRef(({ _, onClick }, ref) => (
    <button
      type="button"
      className="input-output-date-btn"
      onClick={onClick}
      ref={ref}
    >
      <span className="date-button-text">{formatDate(selectedDate)}</span>
      <BsChevronDown className="date-picker-arrow" />
    </button>
  ));
  return (
    <div>
      <DatePickerWrapper
        popperContainer={Popper}
        calendarContainer={Calendar}
        selected={selectedDate}
        onChange={onDateChange}
        customInput={<InputOutputBtn />}
        minDate={Date.now()}
        calendarStartDay={1}
        popperPlacement="right-end"
      />
    </div>
  );
};
export default TaskCalendar;
