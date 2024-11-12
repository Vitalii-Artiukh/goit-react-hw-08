import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { clearContacts } from '../../redux/contacts/slice';
import { selectUser } from '../../redux/auth/selectors';
import clsx from 'clsx';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogOut = () => {
    dispatch(logOut());
    dispatch(clearContacts());
  };

  return (
    <div className={clsx(css.wrapper)}>
      <p className={clsx(css.welcome)}>
        Welcome, <span className={clsx(css.name)}>{user.name}!</span>
      </p>
      <button
        type="button"
        // onClick={() => dispatch(logOut())}
        onClick={onLogOut}
        className={clsx(css.btn)}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
