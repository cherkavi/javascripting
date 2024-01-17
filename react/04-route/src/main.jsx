import React from 'react'
import ReactDOM from 'react-dom/client'
import LayoutRouter from './LayoutRouter.jsx'
import SimpleRouter from './SimpleRouter.jsx'
import Navigation from './Navigation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SimpleRouter /> */}
    {/* <LayoutRouter /> */}
    <Navigation />
  </React.StrictMode>,
)
