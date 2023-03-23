import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { useSelector } from "react-redux";

export default function App() {
  const contacts = useSelector(state => state.contacts);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      {
        contacts.length > 0
          ? (<ContactList contacts={contacts} />)
          : <h2 style={{ marginLeft: "20px", fontFamily: "monospace" }}> Your phonebook is empty </h2>
      }
    </>
  )

}

