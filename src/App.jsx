import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage/WelcomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import { HomePage } from './pages/HomePage/HomePage';
import Loader from './shared/components/styles/Loader';
import Registration from './shared/components/Registration/Registration';
import Login from './shared/components/Login/Login';

import { currentUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/authSelectors';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { GlobalStyles } from './shared/components/styles/GlobalStyles.styled';
import { ThemeSwitching } from './shared/components/styles/ThemeSwitching';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      dispatch(currentUser());
    }
  }, [dispatch]);

  return (
    <ThemeSwitching>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
      </style>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/:id' element={<HomePage />} />
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
