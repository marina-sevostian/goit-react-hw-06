import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { MdContactPhone } from 'react-icons/md';

function App() {
  return (
    <>
      <div className="containerPhonebook">
        <h1 className="title">
          Phonebook <MdContactPhone size="30" />
        </h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
