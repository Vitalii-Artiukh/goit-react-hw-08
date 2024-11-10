import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={clsx(css.wrapper)}>
      <p className={clsx(css.welcome)}>
        Welcome, <span className={clsx(css.name)}>{user.name}!</span>
      </p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={clsx(css.btn)}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
