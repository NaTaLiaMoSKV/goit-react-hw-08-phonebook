import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { selectUserName } from "redux/auth/selections"
import { logOut } from "redux/auth/operations";

export default function UserMenu() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    return (
        <>
            <p className="logout__name">Hi, { userName }</p>
            <button className='form__button' style={{marginRight: "20px", fontSize: "14px", padding: "8px"}} onClick={() => dispatch(logOut())}>Log Out</button>
        </>
    )
} 