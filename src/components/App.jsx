import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { useSelector } from "react-redux";
import { getContacts } from "redux/contacts/contactsSlice";

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {contacts.length === 0 && <h2 style={{ marginLeft: "20px", fontFamily: "monospace" }}> Your phonebook is empty </h2>}
    </>
  )

}

