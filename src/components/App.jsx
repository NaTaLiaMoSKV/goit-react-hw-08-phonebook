import React, { Component } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

const CONTACTS_KEY = 'contacts';

class App extends Component {
  filteredContacts = [];

  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    if (localStorage.getItem(CONTACTS_KEY) !== null) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem(CONTACTS_KEY)),
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.prevState) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
      }
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
        { contacts.length > 0  ? (
            <ContactList contacts={contacts} findContact={this.findContact} onClickButton={this.deleteContactFromList} />
          ) : <h2 style={{marginLeft: "20px",fontFamily:"monospace"}}> Your phonebook is empty </h2>
        }
      </>
    )
  }
}

export default App;