import { useParams } from "react-router-dom";
import Login from "../../shared/components/Login/Login";
import Registration from "../../shared/components/Registration/Registration";

import { GlobalStyles } from "../../shared/components/styles/GlobalStyles.styled";

const AuthPage = () => {
  const { id } = useParams();
  return (
    <>
      <GlobalStyles />
      {id === "login" && <Login />}
      {id === "registration" && <Registration />}
    </>
  );
};

export default AuthPage;
