import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div class="container">
        <NavLink class="navbar-brand" to="/tripsdetail">
          Hike
        </NavLink>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <NavLink class="nav-link py-3 px-0 px-lg-3 rounded" to="/">
                Home
              </NavLink>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <NavLink class="nav-link py-3 px-0 px-lg-3 rounded" to="/trips">
                Trips
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
