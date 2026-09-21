import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import JobCard from './components/JobCard'

function App() {
 


  return (<>
    <Navbar />
    <div className="app-layout">
    <Sidebar />
    <Dashboard />
    </div>
   
    </>
  );
}


export default App
