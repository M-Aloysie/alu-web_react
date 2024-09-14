import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { Notification } from './Notifications.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id='root-notifications'>
      <Notification />
    </div>
    <App />
  </StrictMode>,
)
