import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { Link } from "./Links.styled";
import { selectIsLoggedIn } from "redux/auth/selections";
import css from './Navigation.module.css'

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    return (
        <>
            <nav className={css.links}>
                <Link to="/contacts">Phonebook</Link>
                
                {!isLoggedIn &&
                    <div className={css.authorization}>
                        <Link to="/register">Register</Link>
                        <Link to="/login">LogIn</Link>
                    </div>
                }     
            </nav>
            {isLoggedIn && <UserMenu />}
        </>
        
    )
    
}