import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import clsx from 'clsx';
import css from './App.module.css';
// import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginForm from './LoginForm/LoginForm';
import LoginPage from '../pages/LoginPage/LoginPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import { refreshUser } from '../redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    document.title = 'Phone book';
  });

  return (
    <div>
      <RegistrationPage />
      <LoginPage />
      {/* <Route path="/" element={<HomePage />} /> */}
      <ContactsPage />
    </div>
  );
};

export default App;
