import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink className={clsx(css.link)} to={'/'}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={clsx(css.link)} to={'/contacts'}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
