import React, { Component } from "react";
import { nanoid } from 'nanoid'

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const contactName = form.elements.name.value;
        const contactNumber = form.elements.number.value;
        const contactId = nanoid(10);

        const contact = {
            id: contactId,
            name: contactName,
            number: contactNumber,
        }

        this.props.onSumbit(contact);

        this.resetForm();
    }

    resetForm = () => {
        this.setState({ name: '', number: ''});
    }

    handleInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: [value] });
    }

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label className="form__label">
                    Name 
                    <input type="text" value={name} name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={this.handleInputChange} required/>
                </label>

                <label className="form__label">
                    Phone
                    <input type="tel" value={number} name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={this.handleInputChange} required/>
                </label>
                
                <button type="submit" className="form__button">Add contact</button>
            </form>
        )
    }
}

export default ContactForm;