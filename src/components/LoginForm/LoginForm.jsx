import clsx from 'clsx';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './LoginForm.module.css';
import { useId } from 'react';
import { logInSchema, registrationSchema } from '../API/validationSchema';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailInput = useId();
  const passwordInput = useId();

  const handleSubmit = (values, actions) => {
    const auth = { ...values };
    const action = logIn(auth);
    dispatch(action);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={logInSchema}
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
              placeholder="example@i.com"
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
              placeholder="knl-ksn_01.9248"
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
