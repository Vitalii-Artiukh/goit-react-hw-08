import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink className={clsx(css.link)} to={'/register'}>
        Register
      </NavLink>
      <NavLink className={clsx(css.link)} to={'/login'}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
