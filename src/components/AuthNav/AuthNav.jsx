import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const headerActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div>
      <NavLink className={headerActive} to={'/register'}>
        Register
      </NavLink>
      <NavLink className={headerActive} to={'/login'}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
