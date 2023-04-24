import { useDispatch } from "react-redux"
// import { useSelector } from "react-redux";
// import { selectUserName } from "redux/auth/selections"
import { logOut } from "redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
    const dispatch = useDispatch();
    // const userName = useSelector(selectUserName);

    return (
        <>
            {/* <p className={css.logoutName}>{ userName }</p> */}
            <button className={css.logoutBtn} onClick={() => dispatch(logOut())}>Logout</button>
        </>
    )
} 