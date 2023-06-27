import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { selectFilter } from "redux/filter/selectors";
import { selectContactsList } from "redux/contacts/selectors";
import { ContactItem, ContactName, ContactPhone, List, ContactButton } from "./ContactListStyles";

export default function ContactList() {
    const dispatch = useDispatch();
    
    const filter = useSelector(selectFilter);
    const contactsList = useSelector(selectContactsList);

    const findContact = name => {
        const val = filter.toString().toLocaleLowerCase();
        return name.toLocaleLowerCase().includes(val);
    }

    return (
        <List>
            {contactsList
                .filter(contact => findContact(contact.name))
                .map(contact => ( 
                    <ContactItem key={contact.id} >
                        <ContactName>{contact.name}: <ContactPhone>{contact.number}</ContactPhone></ContactName>
                        <ContactButton type="button" onClick={() => dispatch(deleteContact(contact.id))}> Delete </ContactButton>
                    </ContactItem>
                ))
            }            
        </List>
    )
}