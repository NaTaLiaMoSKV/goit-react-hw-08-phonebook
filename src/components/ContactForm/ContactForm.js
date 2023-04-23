import { useState } from "react";
import { addContact } from "redux/contacts/operations";
import { useSelector, useDispatch } from "react-redux";
import { selectContactsList } from "redux/contacts/selectors";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(selectContactsList);
    const dispatch = useDispatch();

    const onFormSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;

        const contact = {
            name: form.elements.name.value,
            number: form.elements.number.value,
        }
        
        const isContactInContactList = contact => {
            return (contacts.find(cont => cont.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()) !== undefined)
        }

        if (!isContactInContactList(contact) ) {
            dispatch(addContact(contact));
        } else alert(`${contact.name} is already in contacts.`);
        
        setName('');
        setNumber('');
    }

    const handleInputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label className="form__label">
                Name 
                <input type="text" value={name} name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={handleInputChange} required/>
            </label>

            <label className="form__label">
                Phone
                <input type="tel"  value={number} name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                onChange={handleInputChange} required/>
            </label>
            
            <button type="submit" className="form__button">Add contact</button>
        </form>
    )
}
