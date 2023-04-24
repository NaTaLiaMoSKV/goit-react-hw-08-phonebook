import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { Link } from "./Links.styled";
import { selectIsLoggedIn } from "redux/auth/selections";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    return (
        <>
            <nav>
                <Link to="/contacts">Phonebook</Link>
                
                {!isLoggedIn &&
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">LogIn</Link>
                    </>
                }     
            </nav>
            {isLoggedIn && <UserMenu />}
        </>
        
    )
    
}