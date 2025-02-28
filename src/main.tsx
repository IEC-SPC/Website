import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Nexus from './nexus.tsx'
import ReactLenis from 'lenis/react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export function Home() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <App /> } />
        <Route path='/nexus' element={ <Nexus /> } />
      </Routes>
    </Router>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis root>
      <Home />
    </ReactLenis>
  </StrictMode>,
)
