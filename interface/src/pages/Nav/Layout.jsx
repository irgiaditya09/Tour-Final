import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Layout.css';

import { AiFillCar } from "react-icons/ai";


const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-success">
        <div class="container">
          <a class="navbar-brand logo" href="/">
          <AiFillCar class="m-2 fs-2" />Tourin</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          <div class="collapse navbar-collapse">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item m-2">
              <Link className="nav-link active fs-3" to="/">Home</Link>
            </li>
            <li class="nav-item m-2 fs-3">
              <Link className="nav-link fs-3" to="/Place">Place</Link>
            </li>
            <li class="nav-item m-2 fs-3">
              <Link className="nav-link fs-3" to="/Tour">Tour</Link>
            </li>
            <li class="nav-item m-2 fs-3">
              <Link className="nav-link fs-3" to="/Type">Type</Link>
            </li>
            {/* <li class="nav-item m-2 fs-3">
              <Link className="nav-link fs-3" to="/Booking">Booking</Link>
            </li> */}
          </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout