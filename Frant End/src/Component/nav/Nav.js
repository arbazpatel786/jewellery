import './Nav.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [navset, setNavbar] = useState();

  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("role") == "admin") {
        setNavbar(
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="/admin" ><Link to="/">Admin Home </Link> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">  <Link to="/admin/manageuser" > Manage User  </Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" ><Link to="/admin/addproduct">Add  Products </Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" ><Link to="/admin/addsubproduct">Add  SubProducts </Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" ><Link to="/logout">Log Out</Link></a>
            </li>
          </ul>
        )
      }

      else if (localStorage.getItem("role") == "user") {
        setNavbar(
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="/user" ><Link to="/">User Home </Link> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">  <Link to="/user/histary" > Histary  </Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" ><Link to="/user/viewproduct">View Product </Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" ><Link to="/logout">Log Out</Link></a>
            </li>

          </ul>)
      }
      else {
        setNavbar(
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="/" ><Link to="/"> Home </Link> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">  <Link to="/product" > Product  </Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" ><Link to="/blog">Blog</Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" ><Link to="/register">Register</Link></a>
            </li>

            <li class="nav-item">
              <a class="nav-link" ><Link to="/login">Login</Link></a>
            </li>


          </ul>)
      }

    }, 2000)
  }, [])



  return (
    <>

      <header>
        <nav class="navbar navbar-expand-lg navigation-wrap">
          <div class="container">
            <a class="navbar-brand">
              <img src="images/logo.png" />
            </a>
            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span> 
          <i class="fas fa-stream navbar-toggler-icon"></i>
        </button> */}
            <div class=" navbar-collapse" >
              {navset}
            </div>

          </div>

        </nav>

      </header>

    </>

  )

}
export default Nav