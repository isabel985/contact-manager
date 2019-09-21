import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import ContactEditForm from './components/ContactEditForm';
import { fetchContacts, saveContact, updateContact } from './api';

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
  {
    path: "/contacts",
    exact: true,
    component: Contacts,
    fetchContacts: () => fetchContacts(),
  },
  {
    path: ['/contacts/edit', '/contacts/edit/:id'],
    exact: true,
    component: ContactEditForm,
    fetchContact: (id) => fetchContact(id),
    saveContact: (data) => saveContact(data),
    updateContact: (id, data) => updateContact(id, data),
  }
]

export default routes;