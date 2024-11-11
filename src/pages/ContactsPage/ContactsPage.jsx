import React, { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentContact,
  selectError,
  selectLoading,
} from '../../redux/contacts/selectors';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import clsx from 'clsx';
import css from './ContactsPage.module.css';
import { fetchContacts } from '../../redux/contacts/operations';
import EditContactForm from '../../components/EditContactForm/EditContactForm';

const ContactsPage = () => {
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);
  const currentContact = useSelector(selectCurrentContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, currentContact]);

  return (
    <div className={clsx(css.wrapper)}>
      <h1 className={clsx(css.h1)}>Phonebook</h1>
      {currentContact ? <EditContactForm /> : <ContactForm />}
      <SearchBox />
      <div className={clsx(css.loaderWrapper)}>
        {loader && !error && <Loader />}
        {error && !loader && <Error />}
      </div>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
