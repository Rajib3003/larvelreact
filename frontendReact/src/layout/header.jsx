import '../i18n';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../pages/LanguageSwitcher';
import logo from '/assets/frontend_assets/img/will-logo.png';
import { NavLink , useNavigate } from 'react-router-dom';
import { useEffect } from 'react'




export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const { t } = useTranslation();

 
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); 
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/'); 
    }
  }, [isLoggedIn, navigate]);
  


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
          <NavLink to="/" className="nav-item nav-link" activeclassname="active">{t('home')}</NavLink>
          <NavLink to="/notice" className="nav-item nav-link" activeclassname="active">Notice</NavLink>
          <NavLink to="/homework" className="nav-item nav-link" activeclassname="active">Homework</NavLink>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
              <NavLink to="/facilities" className="dropdown-item" activeclassname="active">School Facilities</NavLink>
              <NavLink to="/team" className="dropdown-item" activeclassname="active">Popular Teachers</NavLink>
              <NavLink to="/classes" className="dropdown-item" activeclassname="active">Classes</NavLink>              
              <NavLink to="/teachers" className="dropdown-item" activeclassname="active">Teachers</NavLink>
              <NavLink to="/appointment" className="dropdown-item" activeclassname="active">Make Appointment</NavLink>
              <NavLink to="/aboutus" className="dropdown-item" activeclassname="active">About Us</NavLink>
              <NavLink to="/testimonial" className="dropdown-item" activeclassname="active">Testimonial</NavLink>
              <NavLink to="/error" className="dropdown-item" activeclassname="active">404 Error</NavLink>
            </div>
          </div>
          <NavLink to="/contact" className="nav-item nav-link" activeclassname="active">Contact Us</NavLink>          
        </div>             
        <LanguageSwitcher />
        
        
        {isLoggedIn ? (
        <button className="btn btn-danger ms-2" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button
          className="btn btn-success ms-2"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      )}





      </div>
    </nav>
  )
}
