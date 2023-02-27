import React, { Component } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

class App extends Component {
  filteredContacts = [];

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  formSumbitHandler = contact => {
    if (this.isContactInContactList(contact)) {
      alert(`${contact.name} is already in contacts.`);
    } else {
      this.state.contacts.push(contact);
    }
    this.resetFilter();
  }

  deleteContactFromList = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  isContactInContactList = contact => {
    return (this.state.contacts.find(cont => cont.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()) !== undefined)
  }

  resetFilter = () => {
    this.setState({ filter: '' });
  }

  findContactsByName = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: [value] });
    this.filteredContacts = this.state.contacts.map(contact => contact.name.toLocaleLowerCase()).filter(name => name.includes(value));
  }

  findContact = name => {
   const val = this.state.filter.toString().toLocaleLowerCase();
    return name.toLocaleLowerCase().includes(val);
  }

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSumbit={this.formSumbitHandler} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.findContactsByName} />
        <ContactList contacts={contacts} findContact={this.findContact} onClickButton={this.deleteContactFromList} />
      </>
    )
  }
}

export default App;