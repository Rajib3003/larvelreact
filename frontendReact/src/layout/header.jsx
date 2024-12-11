import '../i18n';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../pages/LanguageSwitcher';
import logo from '/assets/frontend_assets/img/will-logo.png';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <NavLink to="/" className="navbar-brand">
        <h1 className="m-0 text-primary">
          <img src={logo} alt="Will Power School" width="45" height="45" />
          &nbsp;WPS
        </h1>
      </NavLink>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
          <NavLink to="/" className="nav-item nav-link">
            {t('home')}
          </NavLink>
          <NavLink to="/notice" className="nav-item nav-link">
            Notice
          </NavLink>
          <NavLink to="/homework" className="nav-item nav-link">
            Homework
          </NavLink>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Pages
            </a>
            <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
              <NavLink to="/facilities" className="dropdown-item">
                School Facilities
              </NavLink>
              <NavLink to="/team" className="dropdown-item">
                Popular Teachers
              </NavLink>
              <NavLink to="/classes" className="dropdown-item">
                Classes
              </NavLink>
              <NavLink to="/teachers" className="dropdown-item">
                Teachers
              </NavLink>
              <NavLink to="/appointment" className="dropdown-item">
                Make Appointment
              </NavLink>
              <NavLink to="/aboutus" className="dropdown-item">
                About Us
              </NavLink>
              <NavLink to="/testimonial" className="dropdown-item">
                Testimonial
              </NavLink>
              <NavLink to="/error" className="dropdown-item">
                404 Error
              </NavLink>
            </div>
          </div>
          <NavLink to="/contact" className="nav-item nav-link">
            Contact Us
          </NavLink>
        </div>       
        <div className="d-flex flex-column flex-md-row align-items-start justify-content-start">
          <LanguageSwitcher />
          {isLoggedIn ? (
            <button className="btn btn-danger mt-2 mt-md-0 ms-0 ms-md-2" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="btn btn-success mt-2 mt-md-0 ms-0 ms-md-2" onClick={() => navigate('/login')}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
