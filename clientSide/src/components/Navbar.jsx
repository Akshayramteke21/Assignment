import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
<><nav className="navbar navbar-expand-lg bg-secondary-subtle">
  <div className="container-fluid">
   <Link to='/'className="navbar-brand fw-bold fs-4" >Student Management</Link>
   
   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        <Link to="/register" className="nav-link fs-6 fw-semibold">Register</Link>
        <Link to="/profile" className="nav-link fs-6 fw-semibold">Profile</Link>
        <Link to="/login" className="nav-link fs-6 fw-semibold">My Performance</Link>
       
      </div>
    </div>
  </div>
</nav>

    </>

  )
}

export default Navbar