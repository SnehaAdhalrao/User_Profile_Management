import React, { createContext, useState, useContext } from 'react'

const LanguageContext = createContext()


export const useLanguage = () => useContext(LanguageContext)
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('English')

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === 'English' ? 'Spanish' : 'English',
    )
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
