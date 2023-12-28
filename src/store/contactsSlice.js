import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    createContactAction: {
      prepare: data => {
        const newContact = {
          ...data,
          id: nanoid(),
        };
        return { payload: newContact };
      },
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
    },

    deleteContactAction: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilterAction: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const contactsReduser = contactsSlice.reducer;
export const { createContactAction, deleteContactAction, setFilterAction } =
  contactsSlice.actions;
