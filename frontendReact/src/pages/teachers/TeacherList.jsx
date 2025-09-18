import { useState, useEffect } from "react";

// Placeholder images for teachers
import classesImage1 from '/assets/frontend_assets/img/play-1.png';
import classesImage2 from '/assets/frontend_assets/img/one-1.png';
import classesImage3 from '/assets/frontend_assets/img/classes-3.jpg';
import classesImage4 from '/assets/frontend_assets/img/classes-4.jpg';
import classesImage5 from '/assets/frontend_assets/img/classes-5.jpg';
import classesImage6 from '/assets/frontend_assets/img/classes-6.jpg';

export default function TeacherList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data); // Limit to 6 posts for display
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Placeholder images array
  const images = [
    classesImage1,
    classesImage2,
    classesImage3,
    classesImage4,
    classesImage5,
    classesImage6,
    classesImage1,
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">All Teachers List</h1>
          <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        {loading ? (
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
                      {/* </p> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
