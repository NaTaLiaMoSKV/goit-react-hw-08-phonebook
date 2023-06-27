import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { selectUserName } from "redux/auth/selections"
import { logOut } from "redux/auth/operations";
import logoIcon from '../../images/phone-icon.png'
import { UserMenuContainer, LogoutButton, LogoutContainer, LogoutName, LogoContainer, LogoTitle, LogoIcon } from "./UserMenuStyles";

export default function UserMenu() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    return (
        <UserMenuContainer>
            <LogoContainer>
                <LogoIcon src={logoIcon}></LogoIcon>
                <LogoTitle>Phonebook</LogoTitle>
            </LogoContainer>
            <LogoutContainer>
                <LogoutName>Hi, { userName }</LogoutName>
                <LogoutButton onClick={() => dispatch(logOut())}>Log Out</LogoutButton>
            </LogoutContainer>
            
        </UserMenuContainer>
    )
} 