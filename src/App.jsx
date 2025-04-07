
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react'
import NameEmail from './utils/UserContext'
import {Provider} from "react-redux"
import store from './utils/store'
 
function App() {
 const [updateUser,setUpdateUser] = useState({
  name:"himanshu yadav",
  Email:"himanshu.fello@gmail.com",
 })

  return (
    <Provider
    store={store}
    >
    <NameEmail.Provider
    value={{
      user: updateUser,
      setUpdate: setUpdateUser,
    }}
    >

     <Header/>
     <Outlet/>
     <Footer/>
    </NameEmail.Provider>
    </Provider>
  )
}

export default App
