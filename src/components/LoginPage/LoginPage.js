import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/operations";

export default function LoginPage() {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
        logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        })
        );
        form.reset();
    }

    return (
        <div>
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="mail" autoComplete="off" name="email" />

                <label>Password</label>
                <input type="password" autoComplete="off" name="password" />
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}