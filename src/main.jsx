import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ComponentProvider from './store/componentContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ComponentProvider>
      
    <App />
    </ComponentProvider>
  </React.StrictMode>,
)
