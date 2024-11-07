import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.name;

const selectItems = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  // const selectItems = useSelector(selectItems)
  [selectItems, selectFilter],
  (items, filtered) => {
    return items?.filter(
      cont =>
        cont.name.toLowerCase().includes(filtered.toLowerCase()) ||
        cont.number.toLowerCase().includes(filtered.toLowerCase())
    );
  }
);
