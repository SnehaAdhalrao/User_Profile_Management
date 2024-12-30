
import { createSlice } from '@reduxjs/toolkit';

const UserReducer = createSlice({
  name: 'user',
  initialState: {
    name: 'Sneha',
    email: 'snha@gmail.com',
    age: '20',
    language: 'English',
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.age = action.payload.age;
      state.language = action.payload.language;
    },
    clearUser: (state) => {
      state.name = '';
      state.email = '';
      state.age = '';
      state.language = '';
    },
  },
});

export const { setUser, clearUser } = UserReducer.actions; //this is for components
export default UserReducer.reducer;//thisis for store
