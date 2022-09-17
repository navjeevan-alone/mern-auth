import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import {BrowserRouter} from 'react-router-dom'
import AuthProvider from './contexts/AuthContext'
import authReducer,{initialAuth} from './reducers/authReducer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider authReducer={authReducer} initialAuth={initialAuth} >
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
