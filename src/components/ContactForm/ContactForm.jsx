import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ createContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    if ([target.name][0] === 'name') {
      setName(target.value);
    }
    if ([target.name][0] === 'number') {
      setNumber(target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        width: '250px',
      }}
    >
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
        required
      />
      <input
        id="tel"
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        required
      />

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
