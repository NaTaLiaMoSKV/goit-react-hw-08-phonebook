import { getContacts, remove } from "redux/contacts/contactsSlice"
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "redux/filter/filterSlice";

export default function ContactList() {
    const filter = useSelector(getFilter);
    const contactsList = useSelector(getContacts);
    
    const dispatch = useDispatch();

    const findContact = name => {
        const val = filter.toString().toLocaleLowerCase();
        return name.toLocaleLowerCase().includes(val);
    }
    return (
        <ul className="contacts__list">
            {contactsList
                .filter(contact => findContact(contact.name))
                .map(contact => ( 
                    <li key={contact.id} className="contacts__item">
                        <p>{contact.name}: {contact.number}</p>
                        <button className="contacts__button" type="button" onClick={() => dispatch(remove(contact.id))}> Delete </button>
                    </li>
                ))
            }            
        </ul>
    )
}