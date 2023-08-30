import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectUserTheme } from "../../../redux/auth/authSelectors";
import { light, dark, color } from "./theme.styled";

export const ThemeSwitching = ({ children }) => {
  const activeUserTheme = useSelector(selectUserTheme);
  const HandleThemeChoose = () => {
    if (activeUserTheme === "light") {
      return light;
    } else if (activeUserTheme === "dark") {
      return dark;
    } else if (activeUserTheme === "color") {
      return color;
    }
    return light;
  };

  return <ThemeProvider theme={HandleThemeChoose}>{children}</ThemeProvider>;
};

ThemeSwitching.propTypes = {
  children: PropTypes.array.isRequired,
};
