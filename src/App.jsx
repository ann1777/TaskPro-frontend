import { BrowserRouter as Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './shared/components/styles/GlobalStyles.styled';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import { ThemeSwitching } from './shared/components/styles/ThemeSwitching';
import { HomePage } from './pages/HomePage/HomePage';
import { useDispatch } from 'react-redux';
import { currentUser } from './redux/auth/operations';
import { useEffect } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import Registration from './shared/components/Registration/Registration';
import Login from './shared/components/Login/Login';

function App() {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <ThemeSwitching>
      {/* <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
      </style> */}
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        {/* <Route path='/:id' element={<AuthPage />} /> */}
        <Route
          path='/registration'
          element={
            <PublicRoute restricted>
              <Registration />
            </PublicRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/home'
          element={<PrivateRoute>{<HomePage />}</PrivateRoute>}
        />
      </Routes>
    </ThemeSwitching>
  );
}

export default App;
