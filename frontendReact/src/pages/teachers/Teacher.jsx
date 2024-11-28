import teamImageOne from "/assets/frontend_assets/img/team-4.jpg";
import teamImageTwo from "/assets/frontend_assets/img/team-3.jpg";
import teamImageThree from "/assets/frontend_assets/img/team-3.jpg";

export default function Teacher() {
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="mb-3">Popular Teachers</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
              eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded-circle w-75" src={teamImageOne} alt="Mithun Mojundar" />
                <a href="#" className="text-decoration-none">
                <div className="team-text">
                  <h3>Mithun Mojundar</h3>
                  <p>Head Teacher</p>
                  <div className="d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded-circle w-75" src={teamImageTwo} alt="Jannatul Ferdous" />
                <a href="#" className="text-decoration-none">
                <div className="team-text">
                  <h3>Jannatul Ferdous</h3>
                  <p>In-Charge</p>
                  <div className="d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded-circle w-75" src={teamImageThree} alt="Tajbin Bhuiyan" />
                <a href="#" className="text-decoration-none">
                <div className="team-text">
                  <h3>Tajbin Bhuiyan</h3>
                  <p>In-Charge</p>
                  <div className="d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                </a>
              </div>
            </div>                    
          </div>
        </div>
      </div>
    );
  }
  