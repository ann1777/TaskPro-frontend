import DatePicker from "react-datepicker";
import styled from "styled-components";

export const DatePickerWrapper = styled(({ className, ...props }) => (
  <DatePicker {...props} wrapperClassName={className} />
))`
  width: 233px;
  .input-output-date-btn {
    color: ${({ theme }) => theme.colors.btnModal};
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .date-picker-arrow {
    fill: ${({ theme }) => theme.colors.btnModal};
    margin-left: 10px;
  }
  .input-output-date-btn {
    color: ${({ theme }) => theme.colors.btnModal};
    background-color: transparent;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
    border: none;
    margin: 0;
    padding: 0;
  }
  .date-picker-arrow {
    fill: ${({ theme }) => theme.colors.btnModal};
    font-weight: 500;
    font-family: Poppins;
    stroke-width: 1;
  }
  .data-picker-arrow:hover,
  .data-picker-arrow:focus {
    fill: ${({ theme }) => theme.colors.btnModalActive};
  }
  .input-output-date-btn:hover,
  .input-output-date-btn:focus {
    color: ${({ theme }) => theme.colors.btnModalActive};
  }
`;

export const Calendar = styled.div`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.btnModal};
`;

export const Popper = styled.div`
  .react-datepicker__current-month {
    color: ${({ theme }) => theme.colors.textColorModal};
    font-size: 16px;
    font-weight: 500;
    font-family: Poppins;
    letter-spacing: -0.32px;
    margin-bottom: 14px;
  }

  .react-datepicker {
    background: ${({ theme }) => theme.colors.backgroundColorModal};
    border-radius: 8px;
    padding: 18px 20px 18px 20px;
  }

  .react-datepicker__header {
    background-color: inherit;
    border: none;
    padding: 0px;
  }

  .react-datepicker__navigation-icon--previous {
    left: 1px;
  }
  .react-datepicker__navigation-icon--next {
    right: 0px;
  }
  .react-datepicker__navigation-icon--previous::before,
  .react-datepicker__navigation-icon--next::before {
    border-color: ${({ theme }) => theme.colors.btnModal};
    width: 6px;
    height: 6px;
    border-width: 1px 1px 0px 0px;
    top: 20px;
  }

  .react-datepicker__day-names {
    padding-top: 14px;
    border-top: 1px;
    border-top-color: ${({ theme }) => theme.colors.textThirdModal};
    border-top-style: solid;
    display: flex;
    color: ${({ theme }) => theme.colors.textSecondModal};
    opacity: 0.5;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
    margin: 0;
    justify-content: center;
  }

  .react-datepicker__day-name {
    color: ${({ theme }) => theme.colors.textSecondModal};
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
    margin: 0px;
  }
  .react-datepicker__month {
    gap: 3px;
    display: flex;
    flex-direction: column;
    margin: 11px 0 0;
  }
  .react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.colors.textSecondModal};
    color: black;
    border-radius: 50%;
  }

  .react-datepicker__day--outside-month {
    color: ${({ theme }) => theme.colors.textThirdModal};
  }

  .react-datepicker__day {
    color: ${({ theme }) => theme.colors.textColorModal};
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.28px;
    padding: 4px;
    margin: 0;
  }

  .react-datepicker__day:hover {
    background-color: ${({ theme }) => theme.colors.btnModal};
    color: ${({ theme }) => theme.colors.backgroundColorModal};
    border-radius: 50%;
  }
  .react-datepicker__day--outside-month {
    opacity: 0.5;
  }
  .react-datepicker__day.react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.colors.btnModal};
    color: ${({ theme }) => theme.colors.backgroundColorModal};
    border-radius: 50%;
  }
  /* .react-datepicker__day--keyboard-selected {
    border-radius: 0;
    background-color: #1f1f1f;
  } */
`;
