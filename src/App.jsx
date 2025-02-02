import { useEffect, useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { MdContactPhone } from 'react-icons/md';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContact = window.localStorage.getItem('saved-contact');
    return savedContact ? JSON.parse(savedContact) : contactData;
  });
  const [searchBox, setSearchBox] = useState('');

  useEffect(() => {
    window.localStorage.setItem('saved-contact', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prev => {
      return [...prev, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prev => {
      return prev.filter(contact => contact.id !== contactId);
    });
  };

  const filterContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchBox.toLowerCase())
  );

  return (
    <>
      <div className="containerPhonebook">
        <h1 className="title">
          Phonebook <MdContactPhone size="30" />
        </h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={searchBox} onFilter={setSearchBox} />
        <ContactList
          dataListContact={filterContactList}
          onDelete={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
