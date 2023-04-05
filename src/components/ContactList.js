import { deleteContact } from "redux/operations";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter, selectContactsList } from "redux/selectors";

export default function ContactList() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const contactsList = useSelector(selectContactsList);

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
                        <p>{contact.name}: <span style={{ marginLeft: 10 }}>{contact.number}</span></p>
                        <button className="contacts__button" type="button" onClick={() => dispatch(deleteContact(contact.id))}> Delete </button>
                    </li>
                ))
            }            
        </ul>
    )
}