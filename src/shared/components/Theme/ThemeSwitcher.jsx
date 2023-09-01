import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../../redux/auth/operations";
import { selectUserTheme } from "../../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { StyledSelect } from "../Header/Header.styled";

const options = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "color", label: "Violet" },
];

export const ThemeSwitcher = () => {
  const activeUserTheme = useSelector(selectUserTheme);
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.value === activeUserTheme)
  );

  const handleThemeChange = (selectedOption) => {
    dispatch(changeTheme(selectedOption.value));
    setSelectedOption(selectedOption);
  };

  const customStyles = {
    option: (base, state) => ({
      ...base,
      ":active": {
        color: activeUserTheme === "color" ? "#5255BC" : "#BEDBB0",
      },
      ":hover": {
        color: activeUserTheme === "color" ? "#5255BC" : "#BEDBB0",
      },
      border: "none",
      outline: "none",
      boxShadow: "none",
      cursor: "pointer",
      margin: "0px",
      color:
        state.isSelected && activeUserTheme === "color"
          ? "#5255BC"
          : state.isSelected && activeUserTheme !== "color"
          ? "#BEDBB0"
          : activeUserTheme === "dark"
          ? "rgba(255, 255, 255, 0.5)"
          : "#161616",
      backgroundColor: "transparent",
    }),
    indicatorSeparator: (defaultStyles) => ({
      ...defaultStyles,
      display: "none",
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: activeUserTheme === "dark" ? "#161616" : "#FCFCFC",
      cursor: "pointer",
      borderRadius: "8px",
      padding: "0px",
      border:
        activeUserTheme === "color" ? "1px solid #5255BC" : "1px solid #BEDBB0",
      width: "100px",
      height: "107px",
      justifyСontent: "center",
      alignШtems: "center",
      top: "30px",

      right: "0px",
    }),
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",
      ":hover": {
        color: activeUserTheme === "color" ? "#5255BC" : "#BEDBB0",
      },
      padding: "0px",
      margin: "0px",
      color:
        activeUserTheme === "dark"
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(22, 22, 22, 0.80)",
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",
      backgroundColor: "transparent",
      padding: "0px",
      border: "none",
      boxShadow: "none",
      ":hover": {
        color: activeUserTheme === "dark" ? "#5255BC" : "#BEDBB0",
      },
      ":active": {
        color: activeUserTheme === "dark" ? "#5255BC" : "#BEDBB0",
      },
      ":focus": {
        color: activeUserTheme === "dark" ? "#5255BC" : "#BEDBB0",
      },
      ":placeholder": {
        color:
          activeUserTheme === "dark"
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(22, 22, 22, 0.80)",
      },
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      cursor: "pointer",

      color:
        activeUserTheme === "dark"
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(22, 22, 22, 0.80)",
    }),
    valueContainer: (defaultStyles) => ({
      ...defaultStyles,
      ":hover": {
        color: activeUserTheme === "color" ? "#5255BC" : "#BEDBB0",
      },
    }),
  };

  return (
    <StyledSelect
      isSearchable={false}
      placeholder={selectedOption.label}
      value={selectedOption}
      onChange={handleThemeChange}
      options={options}
      styles={customStyles}
    />
  );
};
