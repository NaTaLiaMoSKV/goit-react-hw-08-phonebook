import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { selectFilter } from "redux/filter/selectors";
import { selectContactsList } from "redux/contacts/selectors";
import css from './ContactsList.module.css'

export default function ContactList() {
    const dispatch = useDispatch();
    
    const filter = useSelector(selectFilter);
    const contactsList = useSelector(selectContactsList);

    const findContact = name => {
        const val = filter.toString().toLocaleLowerCase();
        return name.toLocaleLowerCase().includes(val);
    }

    return (
        <ul className={css.contacts__list}>
            {contactsList
                .filter(contact => findContact(contact.name))
                .map(contact => ( 
                    <li key={contact.id} className={css.contacts__item}>
                        <p>{contact.name}: <span style={{ marginLeft: 10 }}>{contact.number}</span></p>
                        <button className={css.contacts__button} type="button" onClick={() => dispatch(deleteContact(contact.id))}> Delete </button>
                    </li>
                ))
            }            
        </ul>
    )
}