import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selections";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <>
            <nav>
                <NavLink to="/contacts">Phonebook</NavLink>
                
                {!isLoggedIn &&
                    <>
                        <NavLink to="/register">Register</NavLink>
                        <NavLink to="/login">LogIn</NavLink>
                    </>
                }     
            </nav>
            {isLoggedIn && <UserMenu />}
        </>
        
    )
    
}