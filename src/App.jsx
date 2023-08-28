import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import { ThemeSwitching } from "./shared/components/styles/ThemeSwitching";
import { HomePage } from "./pages/HomePage/HomePage";
import { useDispatch } from "react-redux";
import { currentUser } from "./redux/auth/operations";
import { useEffect } from "react";
import { PrivateRoute } from "./PrivateRoute";
import { selectIsRefreshing } from "./redux/auth/authSelectors";
import { useSelector } from "react-redux";
import Loader from "./shared/components/styles/Loader";
import { PublicRoute } from "./PublicRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      dispatch(currentUser());
    }
  }, [dispatch]);
  return (
    <ThemeSwitching>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
          </style>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute restricted>
                    <WelcomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="/:id"
                element={
                  <PublicRoute restricted>
                    <AuthPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/home"
                element={<PrivateRoute>{<HomePage />}</PrivateRoute>}
              />
            </Routes>
          </Router>
        </>
      )}
    </ThemeSwitching>
  );
}

export default App;
