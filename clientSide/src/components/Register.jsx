import React, { useState } from 'react'
import axios from 'axios';


import { useNavigate } from 'react-router-dom';






function Register() {

  const navigate= useNavigate()


  const [data,setData]= useState({

    name:'',
    email:'',
    password:''
  });



  const registerUser=async(e)=>{
 e.preventDefault();


 const {name,email,password}= data

 try {
        const { data } =await axios.post('/register',
          name,email,password
        )
        navigate('/login')
 } catch (error) {
          console.log(error);
 }

  }
  return (

    <>
    <div className="container py-5 bg-dark-subtle
 mt-5 w-50 h-100">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header text-center text-uppercase ">
            <h2 className='fw-bold'>Sign up</h2>
          </div>
          <div className="card-body">
            <form onSubmit={registerUser}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="name"  value={data.name} 
                onChange={(e)=> setData(...data, {name:e.target.value})}
                className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" value={data.email} 
                 onChange={(e)=>setData({...data, email:e.target.value})}
                className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="email" 
                onChange={(e)=>setData({...data, password:e.target.value})}
                value={data.password} className="form-control" id="password" placeholder="Enter your Password" />
              </div>
              <button type="submit" className="btn btn-outline-primary mt-2">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Register