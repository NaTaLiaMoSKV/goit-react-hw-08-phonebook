import { useDispatch } from "react-redux"
import { register } from "redux/auth/operations";

export default function RegisterPage() {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <div >
            <h2 className="register_title">Create an account</h2>
            <form onSubmit={handleSubmit}>
                <input className="form__input" type="text" autoComplete="off" name="name" autoFocus placeholder="Name"/>
                <input className="form__input" type="mail" autoComplete="off" name="email" placeholder="Email"/>
                <input className="form__input" type="password" autoComplete="off" name="password" placeholder="Password"/>

                <button className="form__button" type="submit">Register</button>
            </form>
        </div>
    )
}