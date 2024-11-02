import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <Link to="/" className="navbar-brand">
        <h1 className="m-0 text-primary">
          <img src="assets/frontend_assets/img/will-logo.png" alt="Will Power School" width="45" height="45" />
          &nbsp;WPS
        </h1>
      </Link>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
          <Link to="/home" className="nav-item nav-link active">Home</Link>
          <Link to="/about" className="nav-item nav-link">About Us</Link>
          <Link to="/classes" className="nav-item nav-link">Classes</Link>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
              <Link to="/facilities" className="dropdown-item">School Facilities</Link>
              <Link to="/team" className="dropdown-item">Popular Teachers</Link>
              <Link to="/call-to-action" className="dropdown-item">Become A Teacher</Link>
              <Link to="/appointment" className="dropdown-item">Make Appointment</Link>
              <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
              <Link to="/error" className="dropdown-item">404 Error</Link>
            </div>
          </div>
          <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
        </div>
        <a href="admin/login.php" className="btn btn-primary rounded-pill px-3 d-none d-lg-block">
          Admin login<i className="fa fa-arrow-right ms-3"></i>
        </a>
      </div>
    </nav>
  )
}
