import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLanguage } from '../Context/LanguageContext.jsx'
import { clearUser } from '../Store/Reducers/UserSlice.jsx'

const ProfilePage = () => {
  // *************Redux manipulation
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  // ****************Context Manipulation
  const { language, toggleLanguage } = useLanguage()

  const handleDelete = () => {
    dispatch(clearUser())
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h2>
        {user.name || user.email || user.age || user.language ? (
          <div className="border border-gray-300 p-4 rounded-lg bg-gray-50 shadow-inner">
            <p className="text-lg text-gray-700 mb-2">
              <strong className="font-semibold">Name:</strong> {user.name}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong className="font-semibold">Email:</strong> {user.email}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong className="font-semibold">Age:</strong> {user.age}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong className="font-semibold">Preferred Language:</strong>
              {language}
            </p>
            <button
              onClick={toggleLanguage}
              className="w-full bg-blue-500 text-white px-4 py-2 mb-4 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
            >
              Toggle Language
            </button>
            <button
              onClick={handleDelete}
              className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 ease-in-out"
            >
              Delete Profile
            </button>
          </div>
        ) : (
          <p className="text-gray-600 text-center">
            No user data available. Please add user information.
          </p>
        )}
      </div>
    </div>
  )
}

export default ProfilePage
