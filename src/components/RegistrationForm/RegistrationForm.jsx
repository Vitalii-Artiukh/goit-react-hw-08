import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useId } from 'react';
import { useDispatch } from 'react-redux';
import { registrationSchema } from '../API/validationSchema';
import clsx from 'clsx';
import css from './RegistrationForm.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const nameInputId = useId();
  const emailInput = useId();
  const passwordInput = useId();

  const handleSubmit = (values, actions) => {
    //   const action = addContact(contact);
    //   dispatch(action);
    //   actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registrationSchema}
    >
      <Form className={clsx(css.form)}>
        <div className={clsx(css.formWrapper)}>
          <label htmlFor={nameInputId} className={clsx(css.label)}>
            <span>Name</span>

            <Field
              className={clsx(css.input)}
              type="text"
              name="name"
              id={nameInputId}
            />
            <ErrorMessage name="name" component="span" />
          </label>

          <label htmlFor={emailInput} className={clsx(css.label)}>
            <span>Email</span>

            <Field
              className={clsx(css.input)}
              type="email"
              name="email"
              id={emailInput}
            />
            <ErrorMessage name="email" component="span" />
          </label>

          <label htmlFor={passwordInput} className={clsx(css.label)}>
            <span>Password</span>

            <Field
              className={clsx(css.input)}
              type="password"
              name="password"
              id={passwordInput}
            />
            <ErrorMessage name="password" component="span" />
          </label>

          <button className={clsx(css.btn)} type="submit">
            Registration
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
