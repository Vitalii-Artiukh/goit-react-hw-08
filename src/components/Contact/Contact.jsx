import { React } from 'react';
import { MdClose } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import clsx from 'clsx';
import css from './Contact.module.css';
import { setCurrentContact } from '../../redux/contacts/slice';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <div className={clsx(css.contactsWrapper)}>
      <div className={clsx(css.textWrapper)}>
        <p className={clsx(css.name)}>
          <span className={clsx(css.icon)}>👤 </span>
          {name}
        </p>
        <p className={clsx(css.number)}>
          <span className={clsx(css.icon)}>📞 </span>
          {number}
        </p>
      </div>
      <div className={clsx(css.btnWrapper)}>
        <button
          className={clsx(css.btn)}
          type="button"
          onClick={() => dispatch(setCurrentContact({ id, name, number }))}
        >
          <CiEdit />
        </button>
        <button
          className={clsx(css.btn)}
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          <MdClose />
        </button>
      </div>
    </div>
  );
};

export default Contact;
