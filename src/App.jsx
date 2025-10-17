import { useState } from 'react'
import './App.css'
import SideBar from './Compounents/SideBar'
import Header from './Compounents/Header'
import Table from './Compounents/Table'
//alert 
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className='container flex flex-col justify-center gap-5'>
     {/* <SideBar /> */}
     {/* <div className="content col-start-1 md:col-start-2 -col-end-1 flex flex-col gap-7"> */}
      <Header />
      <Table />
     {/* </div> */}
        <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
