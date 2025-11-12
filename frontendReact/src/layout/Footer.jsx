import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../i18n';

import Uparrow from "./Uparrow";
// import classesOneImage from "/assets/frontend_assets/img/play-1.png";
// import classesTwoImage from "/assets/frontend_assets/img/one-1.png";
// import classesThreeImage from "/assets/frontend_assets/img/classes-3.jpg";
// import classesFourImage from "/assets/frontend_assets/img/classes-4.jpg";
// import classesFiveImage from "/assets/frontend_assets/img/classes-5.jpg";
// import classesSixImage from "/assets/frontend_assets/img/classes-6.jpg";

export default function Footer() { 
  const { t } = useTranslation(); 

  

    return (
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 col-md-6">
              <h3 className="text-white mb-4">{t('get-in-touch')}</h3>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>{t('157-2-distilary-road-gandaria-dhaka-1204')}</p>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>{t('171-distilary-road-gandaria-dhaka-1204')}</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+88 01625 229266, +88 01757 080516</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>willpowerschool.bd@gmail.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter"></i></a>                
                <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/wps3955" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-youtube"></i></a>
                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Quick Links</h3>
              <NavLink to="/aboutus" className="btn btn-link text-white-50" activeclassname="active">About Us</NavLink>
              <NavLink to="/contact" className="btn btn-link text-white-50" activeclassname="active">Contact Us</NavLink>
              <NavLink to="/services" className="btn btn-link text-white-50" activeclassname="active">Our Services</NavLink>
              <NavLink to="/privacy-policy" className="btn btn-link text-white-50" activeclassname="active">Privacy Policy</NavLink>
              <NavLink to="/team" className="btn btn-link text-white-50" activeclassname="active">Terms & Condition</NavLink>             
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Quick Links</h3>
              <NavLink to="/aboutus" className="btn btn-link text-white-50" activeclassname="active">About Us</NavLink>
              <NavLink to="/contact" className="btn btn-link text-white-50" activeclassname="active">Contact Us</NavLink>
              <NavLink to="/services" className="btn btn-link text-white-50" activeclassname="active">Our Services</NavLink>
              <NavLink to="/privacy-policy" className="btn btn-link text-white-50" activeclassname="active">Privacy Policy</NavLink>
              <NavLink to="/team" className="btn btn-link text-white-50" activeclassname="active">Terms & Condition</NavLink>             
            </div>

            {/* <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4 d-flex justify-content-center">{t('login')}</h3>
              <p >{t('login-to-view-your-account')}</p>
              <div className=" mx-auto" style={{ maxWidth: '400px' }}>
                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="User Name" />
                <input className="form-control bg-transparent w-100 py-3 ps-4 mt-2 pe-5" type="password" placeholder="Password" />               
                <div className="d-flex justify-content-end">
                  {/* <button 
                    type="button" 
                    className="btn btn-primary mt-2">
                    Login
                  </button> 
                
                </div>
              </div>
            </div> */}
  
            {/* <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Photo Gallery</h3>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img className="img-fluid rounded bg-light p-1" src={classesOneImage} alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded bg-light p-1" src={classesTwoImage} alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded bg-light p-1" src={classesThreeImage} alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded bg-light p-1" src={classesFourImage} alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded bg-light p-1" src={classesFiveImage} alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded bg-light p-1" src={classesSixImage} alt="" />
                </div>
              </div>
            </div> */}
  
           
          </div>
        </div>
  
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;  All Right Reserved.
                Designed By <a className="border-bottom" href="http://rajib.intels.co/">MRB</a>                
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                <NavLink to="/" activeclassname="active">{t('home')}</NavLink>
                <NavLink to="/cookies" activeclassname="active">{t('cookies')}</NavLink>
                <NavLink to="/help" activeclassname="active">{t('help')}</NavLink>
                <NavLink to="/faqs" activeclassname="active">{t('faq')}</NavLink>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      <Uparrow />
      </div>
    );
  }
  