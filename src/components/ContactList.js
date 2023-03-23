import { remove } from "redux/contacts/contactsSlice"
import { useSelector, useDispatch } from "react-redux";

export default function ContactList({ contacts }) {
    const filter = useSelector(state => state.filter.query);
    const dispatch = useDispatch();

    const findContact = name => {
        const val = filter.toString().toLocaleLowerCase();
        return name.toLocaleLowerCase().includes(val);
    }
    return (
        <ul className="contacts__list">
            {contacts
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