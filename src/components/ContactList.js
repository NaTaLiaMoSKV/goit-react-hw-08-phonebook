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
            {/* {console.log(contactsList)} */}
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

// import { getContacts, remove } from "redux/contacts/contactsSlice"
// import { useSelector, useDispatch } from "react-redux";
// import { getFilter } from "redux/filter/filterSlice";

// export default function ContactList({ filter }) {
//     const contacts = useSelector(getContacts);
//     // const filter = useSelector(getFilter);
//     const dispatch = useDispatch();

//     const findContact = name => {
//         // console.log(filter.query);
//         // console.log(filter.toString().toLocaleLowerCase());
//         const val = filter.query.toString().toLocaleLowerCase();
//         return name.toLocaleLowerCase().includes(val);
//     }
//     return (
//         <ul className="contacts__list">
//             {/* {console.log(contacts)} */}
//             {contacts
//                 .filter(contact => findContact(contact.name))
//                 .map(contact => ( 
//                     <li key={contact.id} className="contacts__item">
//                         <p>{contact.name}: {contact.number}</p>
//                         <button className="contacts__button" type="button" onClick={() => dispatch(remove(contact.id))}> Delete </button>
//                     </li>
//                 ))
//             }            
//         </ul>
//     )
// }