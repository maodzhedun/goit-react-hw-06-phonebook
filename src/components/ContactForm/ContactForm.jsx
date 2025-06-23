import { useState } from 'react';

import { FormEl } from './ContactForm.styled';

const ContactForm = ({ AddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    AddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <FormEl>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={handleInputChange}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            value={number}
            required
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </FormEl>
  );
};

export default ContactForm;
