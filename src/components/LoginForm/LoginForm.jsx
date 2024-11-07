import clsx from 'clsx';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './LoginForm.module.css';
import { useId } from 'react';
import { registrationSchema } from '../API/validationSchema';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
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
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
