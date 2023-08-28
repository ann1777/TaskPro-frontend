import { useSelector } from "react-redux";

import { selectIsLoggedIn, selectUser } from "../../redux/auth/authSelectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    user,
  };
};
