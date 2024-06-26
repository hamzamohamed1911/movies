import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ComponentProvider from './store/componentContext.jsx'
import ApiContextProvider from './store/ApiContext.jsx'
import { AuthProvider } from './store/Auth-context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <AuthProvider>

    <ApiContextProvider>
    <ComponentProvider>
    <App />
    </ComponentProvider>
    </ApiContextProvider>
    </AuthProvider>

  </React.StrictMode>,
)
