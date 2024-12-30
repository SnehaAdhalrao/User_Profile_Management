
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Store from './Store/Store.jsx'
import App from './App'
import LanguageProvider from './Context/LanguageContext.jsx' 
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={Store}>
    {/* this wrapping of Redux */}
    <LanguageProvider>
      {/* this is is of contextlang */}
      <App />
    </LanguageProvider>
  </Provider>,
)
