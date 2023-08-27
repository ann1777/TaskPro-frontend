import './App.css';
import Login from './shared/components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './shared/components/Registration/Registration';
import Welcome from './shared/components/Welcome/Welcome';
import { GlobalStyles } from './shared/components/styles/GlobalStyles.styled';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <style>
        @import
        url(`https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap`);
      </style>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/login' element={<Login />} restricted />
          <Route path='/registration' element={<Registration />} restricted />
        </Routes>
      </Router>
    </>
  );
}

export default App;
