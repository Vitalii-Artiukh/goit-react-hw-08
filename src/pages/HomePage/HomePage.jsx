import React from 'react';
import clsx from 'clsx';
import css from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div>
      {isLoggedIn ? (
        <h1 className={clsx(css.h1)}>
          <span>👤</span> Hi {user.name}, Welcome to the Phone Book!{' '}
          <span>📞</span>
        </h1>
      ) : (
        <h1 className={clsx(css.h1)}>
          <span>👤</span> Welcome to the phone book! <span>📞</span>
        </h1>
      )}
    </div>
  );
};

export default HomePage;
