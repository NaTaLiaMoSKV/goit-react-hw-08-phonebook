// import React, { Component, useEffect } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";

const CONTACTS_KEY = 'contacts';


export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem(CONTACTS_KEY)) ?? [];
  });
  const [filter, setFilter] = useState('');
  // let filteredContacts = [];

  useEffect(() => {
    window.localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);
 
  const formSumbitHandler = contact => {
    if (isContactInContactList(contact)) {
      alert(`${contact.name} is already in contacts.`);
    } else {
      setContacts([...contacts, contact]);
    }
    setFilter('');
  }

  const deleteContactFromList = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  const isContactInContactList = contact => {
    return (contacts.find(cont => cont.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()) !== undefined)
  }

  const findContactsByName = e => {
    setFilter(e.currentTarget.value);
  }

  const findContact = name => {
    const val = filter.toString().toLocaleLowerCase();
    return name.toLocaleLowerCase().includes(val);
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onContactFormSubmit={formSumbitHandler} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={findContactsByName} />

      {contacts.length > 0 ? (
        <ContactList contacts={contacts} findContact={findContact} onClickButton={deleteContactFromList} />
      ) : <h2 style={{ marginLeft: "20px", fontFamily: "monospace" }}> Your phonebook is empty </h2>
      }
    </>
  )

}

