import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import clsx from 'clsx';
import css from './UserMenu.module.css';

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
