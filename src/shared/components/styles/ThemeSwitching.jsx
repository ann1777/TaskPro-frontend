import { theme } from './theme.styled';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  selectIsLoggedIn,
  selectUserTheme,
} from '../../../redux/auth/authSelectors';

export const ThemeSwitching = ({ children }) => {
  const activeUserTheme = useSelector(selectUserTheme);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  const selectThemeIndex = () => {
    if (activeUserTheme === 'dark') {
      return 0;
    } else if (activeUserTheme === 'light') {
      return 1;
    } else if (activeUserTheme === 'color') {
      return 2;
    }
    return 0;
  };
  const selectedThemeIndex = theme[selectThemeIndex()];

  return (
    <ThemeProvider theme={selectedThemeIndex.colors}>{children}</ThemeProvider>
  );
};

ThemeSwitching.propTypes = {
  children: PropTypes.array.isRequired,
};
