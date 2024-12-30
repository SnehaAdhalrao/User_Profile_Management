import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLanguage } from '../Context/LanguageContext.jsx'
import { clearUser, setUser } from '../Store/Reducers/UserSlice.jsx'

const ProfilePage = () => {
  // ************* Redux manipulation
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  // **************** Context Manipulation
  const { language, toggleLanguage } = useLanguage()

  // ****************** State for user input
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [isProfileAdded, setIsProfileAdded] = useState(false)

  const handleDelete = () => {
    dispatch(clearUser())
    setIsProfileAdded(false)
  }

  const handleAddUser = () => {
    dispatch(setUser({ name, email, age, language })) // Language is handled by context
    setIsProfileAdded(true) // Show the profile card after adding
    setName('')
    setEmail('')
    setAge('')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center space-x-6">
      

      {/* ********form here  */}
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Add User</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-lg text-gray-700">
            Age
          </label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          onClick={handleAddUser}
          className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 ease-in-out"
        >
          OK
        </button>
      </div>

      {/* ****Form ended here */}
      {/* **************************getting data by the setUseraction */}
      
      {isProfileAdded || user.name ? (
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            User Profile
          </h2>
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
              <strong className="font-semibold">Preferred Language:</strong>{' '}
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
        </div>
      ) : (
        <p className="text-gray-600 text-center">
          No user data available. Please add user information.
        </p>
      )}
    </div>
  )
}

export default ProfilePage
