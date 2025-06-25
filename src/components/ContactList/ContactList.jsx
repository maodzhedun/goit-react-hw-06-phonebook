import { useSelector } from 'react-redux';
import { selectContactcs } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filterSlice';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContactcs);
  const filter = useSelector(selectFilter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;
