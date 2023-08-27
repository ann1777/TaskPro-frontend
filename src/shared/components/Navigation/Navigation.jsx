import {
  NavItemRegistration,
  NavItemLogIn,
  StyledNav,
} from "./Navigation.styled";

function Navigation() {
  return (
    <StyledNav>
      <NavItemRegistration to="/registration" replace>
        Registration
      </NavItemRegistration>
      <NavItemLogIn to="/login" replace>
        Log In
      </NavItemLogIn>
    </StyledNav>
  );
}
export default Navigation;
