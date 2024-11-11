import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import css from './Error.module.css';
import { selectIsError } from '../../redux/auth/selectors';

const Error = () => {
  const errorMessage = useSelector(selectIsError);

  return <div className={clsx(css.text)}>{errorMessage}</div>;
};

export default Error;
