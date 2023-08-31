import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage/WelcomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import { HomePage } from "./pages/HomePage/HomePage";
import Loader from "./shared/components/Loader/Loader";
import Registration from "./shared/components/Registration/Registration";
import Login from "./shared/components/Login/Login";
import Dashboard from "./shared/components/Dashboard/Dashboard";

import { currentUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/authSelectors";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

import { GlobalStyles } from "./shared/components/styles/GlobalStyles.styled";
import { ThemeSwitching } from "./shared/components/Theme/ThemeSwitching";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
              path="/registration"
              element={
                <PublicRoute restricted>
                  <Registration />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/home"
              element={<PrivateRoute>{<HomePage />}</PrivateRoute>}
            >
              <Route
                path="/home/:dashboardId"
                element={<PrivateRoute>{<Dashboard />}</PrivateRoute>}
              />
            </Route>
          </Routes>
        </>
      )}
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeSwitching>
  );
}

export default App;
