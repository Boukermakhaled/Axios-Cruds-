import { useState } from 'react'
import './App.css'
import SideBar from './Compounents/SideBar'
import Header from './Compounents/Header'

function App() {
  return (
    <div className='container grid grid-cols-4 gap-5'>
     <SideBar />
     <div className="content col-start-2 col-end-5 flex flex-col gap-7">
      <Header />
     </div>
    </div>
  )
}

export default App
