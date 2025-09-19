import teamImageOne from "/assets/frontend_assets/img/team-4.jpg";
import teamImageTwo from "/assets/frontend_assets/img/team-5.jpeg";
import teamImageThree from "/assets/frontend_assets/img/team-3.jpg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Teacher() {
  const { t } = useTranslation();
  const navigate = useNavigate();
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="mb-3">{t('popular-teachers')}</h1>
            <p>
              {t('teacher-description')}
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded-circle w-75" src={teamImageOne} alt="Mithun Mojundar" />            
                <div
                    style={{ cursor: 'pointer' }}
                    className="team-text text-center"
                    onClick={() => navigate('/teacher-profile')}
                  >
                  <h3>{t('mitun-mazumder')}</h3>
                  <p>{t('head-teacher')}</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn btn-square btn-primary mx-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square btn-primary mx-1" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded-circle w-75" src={teamImageTwo} alt="Jannatul Ferdous" />               
                 <div
                    style={{ cursor: 'pointer' }}
                    className="team-text text-center"
                    onClick={() => navigate('/teacher-profile')}
                  >
                  <h3>{t('jannatul-ferdous')}</h3>
                  <p>{t('in-charge')}</p> 
                  <div className="d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>                
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded-circle w-75" src={teamImageThree} alt="Tajbin Bhuiyan" />                
                 <div
                    style={{ cursor: 'pointer' }}
                    className="team-text text-center"
                    onClick={() => navigate('/teacher-profile')}
                  >
                  <h3>{t('tajbin-bhuiyan')}</h3>
                  <p>{t('in-charge')}</p>
                  <div className="d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>                
              </div>
            </div>                    
          </div>
        </div>
      </div>
    );
  }
  