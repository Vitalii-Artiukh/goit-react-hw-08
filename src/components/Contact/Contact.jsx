import { React } from 'react';
import { MdClose } from 'react-icons/md';
import { LiaUserEditSolid } from 'react-icons/lia';
import { CiEdit } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../../redux/contacts/operations';
import clsx from 'clsx';
import css from './Contact.module.css';

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
          onClick={() => dispatch()}
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
