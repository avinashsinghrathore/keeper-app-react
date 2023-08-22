import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <span className="navbar-brand">Keeper</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to={"/all-notes"} className="nav-link active" aria-current="page" href="#">All notes</Link>
          </li>

          <li className="nav-item">
            <Link to={"/create"} className="nav-link active" aria-current="page" href="#">Create-notes</Link>
          </li>
         
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar