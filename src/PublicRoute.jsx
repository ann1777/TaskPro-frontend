import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "./shared/hooks/useAuth";

export const PublicRoute = ({ children, restricted }) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = restricted && isLoggedIn;
  return !shouldRedirect ? children : <Navigate to="/home" />;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
  restricted: PropTypes.bool,
};
