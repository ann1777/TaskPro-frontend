import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { HomePage } from "./pages/HomePage/HomePage";
import Loader from "./shared/components/Loader/Loader";
import Dashboard from "./shared/components/Dashboard/Dashboard";
import NotFound from "./shared/components/PageNotFound/NotFound";
import Layout from "./pages/Layout/Layout";
import AuthPage from "./pages/AuthPage/AuthPage";

import { currentUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/authSelectors";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { ThemeSwitching } from "./shared/components/Theme/ThemeSwitching";

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
            <Route path="/" element={<Layout />}>
              <Route index element={<WelcomePage />} />
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
              >
                <Route
                  path="/home/:dashboardId"
                  element={<PrivateRoute>{<Dashboard />}</PrivateRoute>}
                />
              </Route>
              <Route
                path="/docs"
                element={<PrivateRoute>{<Dashboard />}</PrivateRoute>}
              />
              <Route
                path="/privacy-policy"
                element={<PrivateRoute>{<Dashboard />}</PrivateRoute>}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
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
