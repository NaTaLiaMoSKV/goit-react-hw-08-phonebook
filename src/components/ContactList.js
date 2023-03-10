export default function ContactList({ contacts, findContact, onClickButton }) {
    return (
        <ul className="contacts__list">
            {contacts
                .filter(contact => findContact(contact.name))
                .map(contact => ( 
                    <li key={contact.id} className="contacts__item">
                        <p>{contact.name}: {contact.number}</p>
                        <button className="contacts__button" type="button" onClick={() => onClickButton(contact.id)}> Delete </button>
                    </li>
                ))
            }            
        </ul>
    )
}