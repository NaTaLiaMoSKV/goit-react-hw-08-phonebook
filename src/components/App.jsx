import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { useDispatch, useSelector } from "react-redux";
import { selectContactsList, selectError, selectIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      { !isLoading && !error && contacts.length === 0 && <h2 style={{ marginLeft: "20px", fontFamily: "monospace" }}> Your phonebook is empty </h2> }
      { isLoading && !error && <h2 style={{ marginLeft: "20px", fontFamily: "monospace" }}>Loading phonebook...</h2> }
      <ContactList />
      
    </>
  )

}

