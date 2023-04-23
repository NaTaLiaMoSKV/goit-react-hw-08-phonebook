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
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <label className="form__label">Email</label>
                <input className="form__input" type="mail" autoComplete="off" name="email" />

                <label className="form__label">Password</label>
                <input className="form__input" type="password" autoComplete="off" name="password" />

                <button className="form__button" type="submit">Log In</button>
            </form>
        </div>
    )
}