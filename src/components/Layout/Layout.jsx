import React, { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import css from './Layout.module.css';
import { selectIsError, selectIsLoading } from '../../redux/auth/selectors';

export const Layout = ({ children }) => {
  const loader = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  return (
    <div>
      <AppBar />
      <div className={clsx(css.loaderWrapper)}>
        {loader && !error && <Loader />}
        {error && !loader && <Error />}
      </div>
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
