import { useDispatch } from "react-redux";
import { LogOutBtn, LogOutIcon } from "./LogOut.styled";
import sprite from "../../../images/icons.svg";
import { signOut } from "../../../../redux/auth/operations.js";

export const LogOut=()=>{
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(signOut());
      };
    return(
        <LogOutBtn type="button"  onClick={handleLogOut}>
        <LogOutIcon>
          <use href={sprite + "#icon-login"} />
        </LogOutIcon>
        Log out
      </LogOutBtn>
    )
}