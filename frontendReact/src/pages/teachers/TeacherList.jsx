// import { useState, useEffect } from "react";

// Placeholder images for teachers
import aloRaniSaha from '/assets/frontend_assets/img/teachers/alo-rani-saha.png';
import kabiMowshumiMow from '/assets/frontend_assets/img/teachers/kabi-mowshumi-mow.png';
import Mansura from '/assets/frontend_assets/img/teachers/mansura.png';
import MituRaniHalder from '/assets/frontend_assets/img/teachers/mitu-rani-halder.png';
import nasimaKhan from '/assets/frontend_assets/img/teachers/nasima-khan.png';
import nironjonaGhoshProma from '/assets/frontend_assets/img/teachers/nironjona-ghosh-proma.png';
import rabeaAlamgir from '/assets/frontend_assets/img/teachers/rabea-alamgir.png';

export default function TeacherList() {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
    
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts(data); 
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     });
  // }, []);

  // Placeholder images array
  // const images = [
  //   classesImage1,
  //   classesImage2,
  //   classesImage3,
  //   classesImage4,
  //   classesImage5,
    // classesImage6,
  //   classesImage1,
  // ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">All Teachers List</h1>
          <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        {/* {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row g-4">
            {posts.map((post, index) => (
              <div key={post.id} className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`${0.01 * index}s`}>
                <div className="classes-item">
                  <div className="bg-light rounded-circle w-50 mx-auto p-3">
                    <img className="img-fluid rounded-circle" src={images[index % images.length]} alt="Teacher" />
                  </div>
                  <div className="bg-light rounded p-4 pt-3 mt-n5">
                    <a className="d-block text-center h3 mt-3 " href="#">{post.title}</a>
                    <p className="d-block text-center">Teacher {post.id}</p>
                    <div className="row g-1">
                      <p>
                        {post.body.slice(0, 100)}...</p>
                        <div className="d-flex justify-content-end">
                          <button
                            className="btn btn-primary ms-2"
                            onClick={() => window.open(`${import.meta.env.BASE_URL}/teacherdetails/${post.id}`, '_self')}
                          >
                            Read More
                          </button>
                        </div>                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )} */}


          <div className="row g-4">
          
              <div  className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`${0.01 * 0}s`}>
                <div className="classes-item">
                  <div className="bg-light rounded-circle w-50 mx-auto p-3">
                    <img className="img-fluid rounded-circle" src={aloRaniSaha} alt="Teacher" />
                  </div>
                  <div className="bg-light rounded p-4 pt-3 mt-n5">
                    <a className="d-block text-center h3 mt-3 " href="#">Alo Rani Saha</a>
                    <p className="d-block text-center">Drawing Teacher</p>
                    <div className="row g-1">
                      <p></p>
                        <div className="d-flex justify-content-end">
                          <button
                            className="btn btn-primary ms-2"
                            onClick={() => window.open(`${import.meta.env.BASE_URL}/teacherdetails/1`, '_self')}
                          >
                            Read More
                          </button>
                        </div>                      
                    </div>
                  </div>
                </div>
              </div>         
              <div  className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`${0.01 * 0}s`}>
                <div className="classes-item">
                  <div className="bg-light rounded-circle w-50 mx-auto p-3">
                    <img className="img-fluid rounded-circle" src={kabiMowshumiMow} alt="Teacher" />
                  </div>
                  <div className="bg-light rounded p-4 pt-3 mt-n5">
                    <a className="d-block text-center h3 mt-3 " href="#">Kabi Mowshumi Mow</a>
                    <p className="d-block text-center">Music Teacher</p>
                    <div className="row g-1">
                      <p></p>
                        <div className="d-flex justify-content-end">
                          <button
                            className="btn btn-primary ms-2"
                            // onClick={() => window.open(`${import.meta.env.BASE_URL}/teacherdetails/${post.id}`, '_self')}
                          >
                            Read More
                          </button>
                        </div>                      
                    </div>
                  </div>
                </div>
              </div>         
              <div  className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`${0.01 * 0}s`}>
                <div className="classes-item">
                  <div className="bg-light rounded-circle w-50 mx-auto p-3">
                    <img className="img-fluid rounded-circle" src={Mansura} alt="Teacher" />
                  </div>
                  <div className="bg-light rounded p-4 pt-3 mt-n5">
                    <a className="d-block text-center h3 mt-3 " href="#">Mansura</a>
                    <p className="d-block text-center">Assistant Teacher</p>
                    <div className="row g-1">
                      <p></p>
                        <div className="d-flex justify-content-end">
                          <button
                            className="btn btn-primary ms-2"
                            // onClick={() => window.open(`${import.meta.env.BASE_URL}/teacherdetails/${post.id}`, '_self')}
                          >
                            Read More
                          </button>
                        </div>                      
                    </div>
                  </div>
                </div>
              </div>         
              <div  className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`${0.01 * 0}s`}>
                <div className="classes-item">
                  <div className="bg-light rounded-circle w-50 mx-auto p-3">
                    <img className="img-fluid rounded-circle" src={MituRaniHalder} alt="Teacher" />
                  </div>
                  <div className="bg-light rounded p-4 pt-3 mt-n5">
                    <a className="d-block text-center h3 mt-3 " href="#">Mitu Rani Halder</a>
                    <p className="d-block text-center">Senior Assistant Teacher</p>
                    <div className="row g-1">
                      <p></p>
                        <div className="d-flex justify-content-end">
                          <button
                            className="btn btn-primary ms-2"
                            // onClick={() => window.open(`${import.meta.env.BASE_URL}/teacherdetails/${post.id}`, '_self')}
                          >
                            Read More
                          </button>
                        </div>                      
                    </div>
                  </div>
                </div>
              </div>         
              <div  className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`${0.01 * 0}s`}>
                <div className="classes-item">
                  <div className="bg-light rounded-circle w-50 mx-auto p-3">
                    <img className="img-fluid rounded-circle" src={nasimaKhan} alt="Teacher" />
                  </div>
                  <div className="bg-light rounded p-4 pt-3 mt-n5">
                    <a className="d-block text-center h3 mt-3 " href="#">Nasima Khan</a>
                    <p className="d-block text-center">Assistant Teacher</p>
                    <div className="row g-1">
                      <p></p>
                        <div className="d-flex justify-content-end">
                          <button
                            className="btn btn-primary ms-2"
                            // onClick={() => window.open(`${import.meta.env.BASE_URL}/teacherdetails/${post.id}`, '_self')}
                          >
                            Read More
                          </button>
                        </div>                      
                    </div>
                  </div>
                </div>
              </div>         
              <div  className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`${0.01 * 0}s`}>
                <div className="classes-item">
                  <div className="bg-light rounded-circle w-50 mx-auto p-3">
                    <img className="img-fluid rounded-circle" src={nironjonaGhoshProma} alt="Teacher" />
                  </div>
                  <div className="bg-light rounded p-4 pt-3 mt-n5">
                    <a className="d-block text-center h3 mt-3 " href="#">Nironjona Ghosh Proma</a>
                    <p className="d-block text-center">Assistant Teacher</p>
                    <div className="row g-1">
                      <p></p>
                        <div className="d-flex justify-content-end">
                          <button
                            className="btn btn-primary ms-2"
                            // onClick={() => window.open(`${import.meta.env.BASE_URL}/teacherdetails/${post.id}`, '_self')}
                          >
                            Read More
                          </button>
                        </div>                      
                    </div>
                  </div>
                </div>
              </div>         
              <div  className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`${0.01 * 0}s`}>
                <div className="classes-item">
                  <div className="bg-light rounded-circle w-50 mx-auto p-3">
                    <img className="img-fluid rounded-circle" src={rabeaAlamgir} alt="Teacher" />
                  </div>
                  <div className="bg-light rounded p-4 pt-3 mt-n5">
                    <a className="d-block text-center h3 mt-3 " href="#">Rabea Alamgir</a>
                    <p className="d-block text-center">Assistant Teacher</p>
                    <div className="row g-1">
                      <p></p>
                        <div className="d-flex justify-content-end">
                          <button
                            className="btn btn-primary ms-2"
                            // onClick={() => window.open(`${import.meta.env.BASE_URL}/teacherdetails/${post.id}`, '_self')}
                          >
                            Read More
                          </button>
                        </div>                      
                    </div>
                  </div>
                </div>
              </div>         
          </div>      
      </div>
    </div>
  );
}
