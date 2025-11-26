/* eslint-disable no-undef */
import { useEffect } from 'react';
import '../i18n';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../pages/LanguageSwitcher';
import logo from '/assets/frontend_assets/img/will-logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import bootstrap from 'react-bootstrap';


Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };

  const handleLogout = async () => {
    try {
      const baseApiUrl = import.meta.env.VITE_BASE_API_URL; // .env এ define করা URL
      const response = await fetch(`${baseApiUrl}/auth/logout`, {
        method: "POST",         // অনেক API logout POST ব্যবহার করে
        credentials: "include", // cookie/authorization handle করতে
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || "Logout failed");
      }

      // Success: Logged out
      setIsLoggedIn(false);

      // Optional: Redirect to login or home page
      navigate("/");

    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed, please try again!");
    }
  };

  useEffect(() => {
    // Close navbar when clicking a nav-link (not dropdown-toggle)
    const handleNavLinkClick = (event) => {
      const target = event.target;
      // If it’s not a dropdown toggle, close the navbar
      if (!target.classList.contains('dropdown-toggle')) {
        const navbarCollapse = document.getElementById('navbarCollapse');
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
          bsCollapse.hide();
        }
      }
    };

    // Close navbar after clicking submenu item
    const submenuItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
    submenuItems.forEach((item) => item.addEventListener('click', handleNavLinkClick));

    // Close navbar on simple nav link click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach((link) => link.addEventListener('click', handleNavLinkClick));

    return () => {
      navLinks.forEach((link) => link.removeEventListener('click', handleNavLinkClick));
      submenuItems.forEach((item) => item.removeEventListener('click', handleNavLinkClick));
    };
  }, []);

  return (
    
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <div className="container">
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
          {!isLoggedIn && (
            <>
          <NavLink to="/" className="nav-item nav-link">
            {t('home')}
          </NavLink>
          <NavLink to="/notice" className="nav-item nav-link">
           {t('notice')}
          </NavLink>
          <NavLink to="/homework" className="nav-item nav-link">
            {t('homework')}
          </NavLink>

          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              {t('pages')}
            </a>
            <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
              <NavLink to="/facilities" className="dropdown-item">
                {t('school-facilities')}
              </NavLink>
              <NavLink to="/team" className="dropdown-item">
                {t('popular-teachers')}
              </NavLink>
              <NavLink to="/admission-information" className="dropdown-item">
                {t('admission-information')}
              </NavLink>
              <NavLink to="/classes" className="dropdown-item">
                {t('classes')}
              </NavLink>
              <NavLink to="/teachers" className="dropdown-item">
                {t('teachers')}
              </NavLink>
              <NavLink to="/appointment" className="dropdown-item">
                {t('appointment')}
              </NavLink>
              <NavLink to="/aboutus" className="dropdown-item">
                {t('about-us')}
              </NavLink>
              <NavLink to="/testimonial" className="dropdown-item">
                {t('testimonials')}
              </NavLink>
              <NavLink to="/error" className="dropdown-item">
                {t('error-page')}
              </NavLink>
              <NavLink to="/faqs" className="dropdown-item">
                {t('faqs')}
              </NavLink>
            </div>
          </div>

          <NavLink to="/contact" className="nav-item nav-link">
           {t('contact-us')}
          </NavLink>
          </>
          )}
        </div>




 



        <div className="d-flex flex-column flex-md-row align-items-start justify-content-start">        
          <LanguageSwitcher />
          {isLoggedIn ? (
            <button
              className="btn btn-danger mt-2 mt-md-0 ms-0 ms-md-2"
              onClick={handleLogout}
            >
              {t('logout')}
            </button>
          ) : (
            <button
              className="btn btn-success mt-2 mt-md-0 ms-0 ms-md-2"
              onClick={() => navigate('/login')}
            >
              {t('login')}
            </button>
          )}
        </div>
      </div>
      </div>
    </nav>
  );
}
