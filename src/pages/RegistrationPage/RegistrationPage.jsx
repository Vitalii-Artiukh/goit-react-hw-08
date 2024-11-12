import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from '../../redux/auth/selectors';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Loader from '../../components/Loader/Loader';
import clsx from 'clsx';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const loader = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  return (
    <div>
      <div className={clsx(css.loaderWrapperAuth)}>
        {loader && <Loader />}
        {error === 'Unable to fetch user' && (
          <p>Please register or log in to your account</p>
        )}
        {error === 400 && <p>User registration error</p>}
      </div>
      <div className={clsx(css.registrationWrapper)}>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
