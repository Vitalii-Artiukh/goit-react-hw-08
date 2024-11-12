import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from '../../redux/auth/selectors';
import LoginForm from '../../components/LoginForm/LoginForm';
import Loader from '../../components/Loader/Loader';
import clsx from 'clsx';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const loader = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  console.log(error);

  return (
    <div>
      {' '}
      <div className={clsx(css.loaderWrapperAuth)}>
        {loader && <Loader />}
        {error === 'Unable to fetch user' && (
          <p>Please register or log in to your account</p>
        )}
        {error === 400 && <p>Incorrect login or password</p>}
      </div>
      <div className={clsx(css.loginWrapper)}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
