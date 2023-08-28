import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './shared/components/styles/GlobalStyles.styled';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import { ThemeSwitching } from './shared/components/styles/ThemeSwitching';
import { HomePage } from './pages/HomePage/HomePage';
import { useDispatch } from 'react-redux';
import { currentUser } from './redux/auth/operations';
import { useEffect } from 'react';
import { PrivateRoute } from './PrivateRoute';

function App() {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <ThemeSwitching>
      <style>
        @import
        url(`https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap`);
      </style>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/:id' element={<AuthPage />} />
          <Route
            path='/home'
            element={<PrivateRoute>{<HomePage />}</PrivateRoute>}
          />
        </Routes>
      </Router>
    </ThemeSwitching>
  );
}

export default App;
