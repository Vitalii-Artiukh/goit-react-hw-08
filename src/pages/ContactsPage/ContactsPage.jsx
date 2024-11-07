import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import clsx from 'clsx';
import css from './ContactsPage.module.css'

const ContactsPage = () => {
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={clsx(css.wrapper)}>
      <h1 className={clsx(css.h1)}>Phonebook</h1>
      <ContactForm />
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
