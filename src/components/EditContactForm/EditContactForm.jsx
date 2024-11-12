import { React, useId } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { contactSchema } from '../API/validationSchema';
import { MdClose } from 'react-icons/md';
import {
  selectContactId,
  selectCurrentContact,
} from '../../redux/contacts/selectors';
import { editContact } from '../../redux/contacts/operations';
import { setCurrentContact } from '../../redux/contacts/slice';
import clsx from 'clsx';
import css from './EditContactForm.module.css';

const EditContactForm = () => {
  const nameInputId = useId();
  const numberInputId = useId();
  const dispatch = useDispatch();
  const initialValues = useSelector(selectCurrentContact);
  const contactId = useSelector(selectContactId);

  const handleSubmit = (values, actions) => {
    const action = editContact({ ...values, contactId });
    dispatch(action);
    actions.resetForm();
  };

  const closeForm = () => {
    const action = setCurrentContact(null);
    dispatch(action);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={clsx(css.form)}>
        <div className={clsx(css.formWrapper)}>
          <button
            type="button"
            className={clsx(css.closeBtn)}
            onClick={closeForm}
          >
            <MdClose />
          </button>
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

          <label htmlFor={numberInputId} className={clsx(css.label)}>
            <span>Number</span>

            <Field
              className={clsx(css.input)}
              type="text"
              name="number"
              id={numberInputId}
            />
            <ErrorMessage name="number" component="span" />
          </label>

          <button className={clsx(css.btn)} type="submit">
            Change contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditContactForm;
