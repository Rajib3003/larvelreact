
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import aboutusImageOne from "/assets/frontend_assets/img/about-1.jpg";

export default function TeacherDetails() {
  const { id } = useParams(); // Get the ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data for the specific ID
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data); // Set the post data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
            <div className="row">
              <div className="col-12 text-center">
                <img
                  className="img-fluid w-75 rounded-circle bg-light p-3"
                  src={aboutusImageOne}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-4">{post.title}</h1>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
