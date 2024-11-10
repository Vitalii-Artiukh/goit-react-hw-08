import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const headerActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink className={headerActive} to={'/'}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={headerActive} to={'/contacts'}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
