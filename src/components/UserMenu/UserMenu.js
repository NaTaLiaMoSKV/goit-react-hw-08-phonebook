import { useDispatch } from "react-redux"
// import { useSelector } from "react-redux";
// import { selectUser } from "redux/auth/selections"
import { logOut } from "redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
    const dispatch = useDispatch();
    // const user = useSelector(selectUser);

    return (
        <>
            {/* <p className={css.logoutName}>{ user.name }</p> */}
            <button className={css.logoutBtn} onClick={() => dispatch(logOut())}>Logout</button>
        </>
    )
} 