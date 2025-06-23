import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../../redux/contactsSlice';
import { ContainerApp } from './App.styled';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
  };

  const handleFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContainerApp>
      <div>
        <h1>Phonebook</h1>
        <ContactForm AddContact={handleAddContact} />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilter} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={handleDeleteContact}
        />
      </div>
    </ContainerApp>
  );
};

export default App;
