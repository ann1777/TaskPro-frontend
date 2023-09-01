import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "./shared/hooks/useAuth";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

export const PublicRoute = ({ children, restricted }) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = restricted && isLoggedIn;
  if (!isLoggedIn) return <WelcomePage />;
  if (shouldRedirect)
    return !shouldRedirect ? children : <Navigate to="/home" />;
  else return <PageNotFound />;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
  restricted: PropTypes.bool,
};
