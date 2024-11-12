import React from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { setConfirmDeletion } from '../../redux/contacts/slice';
import { selectConfirmDeletion } from '../../redux/contacts/selectors';
import clsx from 'clsx';
import css from './ModalWindow.module.css';

const ModalWindow = () => {
  const dispatch = useDispatch();
  const currentContact = useSelector(selectConfirmDeletion);

  return (
    <div className={clsx(css.modalOverlay)}>
      <div className={clsx(css.modal)}>
        <button
          className={clsx(css.closeModalBtn)}
          type="button"
          onClick={() => dispatch(setConfirmDeletion(null))}
        >
          <MdClose />
        </button>
        <h3 className={clsx(css.titleModal)}>
          Please confirm <br /> deletion of contact:
        </h3>
        <h3 className={clsx(css.name)}>{currentContact.name}</h3>
        <h3 className={clsx(css.name)}>{currentContact.number}</h3>
        <button
          className={clsx(css.deleteBtn)}
          type="button"
          onClick={() => dispatch(deleteContact(currentContact.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
