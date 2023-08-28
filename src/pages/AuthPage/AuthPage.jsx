import { useParams } from "react-router-dom";
import Login from "../../shared/components/Login/Login";
import Registration from "../../shared/components/Registration/Registration";

const AuthPage = () => {
  const { id } = useParams();

  return (
    <>
      {id === "login" && <Login />}
      {id === "registration" && <Registration />}
    </>
  );
};

export default AuthPage;
