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
            <h2 className="login_title">Do you have an account? Sign In!</h2>
            <form onSubmit={handleSubmit}>
                <input className="form__input" type="mail" autoComplete="off" name="email" autoFocus placeholder="Email"/>
                <input className="form__input" type="password" autoComplete="off" name="password" placeholder="Password"/>
                <button className="form__button" type="submit">Log In</button>
            </form>
        </div>
    )
}