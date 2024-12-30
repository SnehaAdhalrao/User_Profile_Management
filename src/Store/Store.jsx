
import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './Reducers/UserSlice' 

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
})

export default store
