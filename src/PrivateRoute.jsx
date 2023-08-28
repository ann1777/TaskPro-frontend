import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "./shared/hooks/useAuth";

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
