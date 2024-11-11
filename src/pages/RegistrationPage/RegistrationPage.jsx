import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import clsx from 'clsx';
import css from './RegistrationPage.module.css';
import { useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from '../../redux/auth/selectors';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/ErrorAuth/Error';

const RegistrationPage = () => {
  const loader = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  return (
    <div className={clsx(css.registrationWrapper)}>
      <div className={clsx(css.loaderWrapperAuth)}>
        {loader && !error && <Loader />}
        {error && !loader && <Error />}
      </div>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
