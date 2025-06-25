import { ContainerApp } from './App.styled';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';

const App = () => {

  return (
    <ContainerApp>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </ContainerApp>
  );
};

export default App;
