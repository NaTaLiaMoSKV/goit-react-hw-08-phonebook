import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "redux/auth/selections"
import { logOut } from "redux/auth/operations";

export default function UserMenu() {
    const dispatch = useDispatch();
    const { name } = useSelector(selectUser);

    const handleLogOutButton = () => {
        dispatch(logOut());
    }

    return (
        <div>
            <p>{name}</p>
            <button onClick={handleLogOutButton}>Logout</button>
        </div>
    )
} 