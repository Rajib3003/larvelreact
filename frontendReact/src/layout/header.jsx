import logo from '/assets/frontend_assets/img/will-logo.png';
import LanguageSwitcher from '../pages/LanguageSwitcher';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <NavLink to="/" className="navbar-brand">
        <h1 className="m-0 text-primary">
          {/* <img src="assets/frontend_assets/img/will-logo.png" alt="Will Power School" width="45" height="45" /> */}
          <img src={logo} alt="Will Power School" width="45" height="45" />
          &nbsp;WPS
        </h1>
      </NavLink>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
          <NavLink to="/" className="nav-item nav-link" activeClassName="active">Home</NavLink>
          <NavLink to="/aboutus" className="nav-item nav-link" activeClassName="active">About Us</NavLink>
          <NavLink to="/homework" className="nav-item nav-link" activeClassName="active">Homework</NavLink>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
              <NavLink to="/facilities" className="dropdown-item" activeClassName="active">School Facilities</NavLink>
              <NavLink to="/team" className="dropdown-item" activeClassName="active">Popular Teachers</NavLink>
              <NavLink to="/classes" className="dropdown-item" activeClassName="active">Classes</NavLink>              
              <NavLink to="/call-to-action" className="dropdown-item" activeClassName="active">Become A Teacher</NavLink>
              <NavLink to="/appointment" className="dropdown-item" activeClassName="active">Make Appointment</NavLink>
              <NavLink to="/testimonial" className="dropdown-item" activeClassName="active">Testimonial</NavLink>
              <NavLink to="/error" className="dropdown-item" activeClassName="active">404 Error</NavLink>
            </div>
          </div>
          <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact Us</NavLink>          
        </div>             
        <LanguageSwitcher />
      </div>
    </nav>
  )
}
