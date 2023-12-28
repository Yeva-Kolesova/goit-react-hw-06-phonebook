import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  createContactAction,
  deleteContactAction,
  setFilterAction,
} from '../store/contactsSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const createContact = contact => {
    const isName = contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (!isName) {
      dispatch(createContactAction(contact));
    } else {
      alert(`${contact.name} is already in contacts`);
    }
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContactAction(contactId));
  };

  const handleSetFilter = e => {
    dispatch(setFilterAction(e.target.value));
  };

  const getFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} />

      <h2>Contacts</h2>
      <Filter onChange={handleSetFilter} value={filter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
