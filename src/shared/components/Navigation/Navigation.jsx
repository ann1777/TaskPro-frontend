import { useAuth } from "../../hooks/useAuth";
import {
  NavItemRegistration,
  NavItemLogIn,
  StyledNav,
  NavItemHome,
} from "./Navigation.styled";

function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <StyledNav>
          <NavItemHome to="/home" replace>
            Return Back
          </NavItemHome>
        </StyledNav>
      ) : (
        <StyledNav>
          <NavItemRegistration to="/registration">
            Registration
          </NavItemRegistration>
          <NavItemLogIn to="/login">Log In</NavItemLogIn>
        </StyledNav>
      )}
    </>
  );
}
export default Navigation;
