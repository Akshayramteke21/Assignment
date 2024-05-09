import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginForm from './components/LoginForm';
import {Routes,Route, Link } from 'react-router-dom';
import Register from './components/Register';
import axios from 'axios';
import Profile from './components/Profile';
import Home from './components/Home';
import Navbar from './components/Navbar';



axios.defaults.baseURL= "http://localhost:8000"

axios.defaults.withCredentials=true;


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    
  
          <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<LoginForm/>}> </Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/profile' element={<Profile/>} ></Route>
          
         </Routes>
     
    </>
  )
}

export default App
