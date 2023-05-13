import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";

import { selectContactsList, selectError, selectIsLoading } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";
import { selectIsLoggedIn } from "redux/auth/selections";

export default function Phonebook() {
    const dispatch = useDispatch();
    
    const contacts = useSelector(selectContactsList);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    const isLoggedIn = useSelector(selectIsLoggedIn)

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div >
            <ContactForm />
            <Filter />
            { !isLoading && !error && contacts.length === 0 && <h3 className="notification" style={{textAlign: "center"}}> Your phonebook is empty </h3> }
            { isLoading && !error && <h3 className="notification" style={{textAlign: "center"}}>Loading phonebook...</h3> }
            { isLoggedIn && <ContactList/> }
        </div>
    )
}