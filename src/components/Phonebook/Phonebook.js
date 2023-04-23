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
        <div className="phonebook__container">
            <ContactForm />
            <div className="contacts__container">
                {/* <h2>Contacts</h2> */}
                <Filter />
                { !isLoading && !error && contacts.length === 0 && <h2 style={{ marginLeft: "20px", fontFamily: "monospace" }}> Your phonebook is empty </h2> }
                { isLoading && !error && <h2 style={{ marginLeft: "20px", fontFamily: "monospace" }}>Loading phonebook...</h2> }
                { isLoggedIn && <ContactList /> }
            </div>
        </div>
    )
}