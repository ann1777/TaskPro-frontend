import { LinkItem, LinkList, LinkNav } from "../Login/Login.styled.jsx";

function NavAuth() {
  return (
    <LinkList>
      <LinkNav>
        <LinkItem to="/registration" replace>
          Registration
        </LinkItem>
      </LinkNav>
      <LinkNav>
        <LinkItem to="/login" replace>
          Log In
        </LinkItem>
      </LinkNav>
    </LinkList>
  );
}
export default NavAuth;
