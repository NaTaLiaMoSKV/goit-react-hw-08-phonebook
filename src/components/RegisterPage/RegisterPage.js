// import { useState } from "react";
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
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" autoComplete="off" name="name" autoFocus />
                
                <label>Email</label>
                <input type="mail" autoComplete="off" name="email" />

                <label>Password</label>
                <input type="password" autoComplete="off" name="password" />

                <button type="submit">Register</button>
            </form>
        </div>
    )
}