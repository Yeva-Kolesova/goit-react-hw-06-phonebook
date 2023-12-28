import { createSelector } from '@reduxjs/toolkit';

const selectContactsState = state => state.contacts;

export const selectContacts = createSelector(
  selectContactsState,
  contactsState => contactsState.contacts
);

export const selectFilter = createSelector(
  selectContactsState,
  contactsState => contactsState.filter
);
