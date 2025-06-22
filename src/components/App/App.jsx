import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContainerApp } from './App.styled';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';

const LS_KEY = 'contact';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LS_KEY);
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const AddContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContact => [...prevContact, newContact]);
  };

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <ContainerApp>
      <div>
        <h1>Phonebook</h1>
        <ContactForm AddContact={AddContact} id={contacts.id} />
      </div>
      <div>
        <h2>Contacts</h2>

        <Filter value={filter} onChange={handleFilter} />
        <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
      </div>
    </ContainerApp>
  );
};

export default App;
