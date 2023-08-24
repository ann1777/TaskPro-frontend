import {
  NavigationList,
  NavigationItem,
  NavItem,
  StyledDiv,
} from "./Navigation.styled";

function Navigation() {
  return (
    <StyledDiv>
      <nav>
        <NavigationList>
          <NavigationItem>
            <NavItem to="/registration" replace>
              Registration
            </NavItem>
          </NavigationItem>
          <NavigationItem>
            <NavItem to="/login" replace>
              Log In
            </NavItem>
          </NavigationItem>
        </NavigationList>
      </nav>
    </StyledDiv>
  );
}
export default Navigation;
