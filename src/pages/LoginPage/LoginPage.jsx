import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import clsx from 'clsx';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={clsx(css.loginWrapper)}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
