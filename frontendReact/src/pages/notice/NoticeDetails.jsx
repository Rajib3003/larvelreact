import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function NoticeDetails() {
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  const { slug } = useParams(); // Get the ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

   const [selectedImg, setSelectedImg] = useState(null);


  const postData = post?.data
  

  


  useEffect(() => {
    // Fetch data for the specific ID
    // fetch(`https://ph-tour-managment-system.vercel.app/api/v1/notice/${slug}`)
    fetch(`${baseApiUrl}/notice/${slug}`)
      .then((response) => response.json())      
      .then(data => {       
        setPost(data); // adjust if needed
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [baseApiUrl,slug]);

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
          {/* Images */}


          <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
            <div className="row">
              <div className="col-12 text-center">
                {postData.images && postData.images.length > 0 && (
                  <div style={{ display: "flex", gap: "10px", margin: "10px 0", flexWrap: "wrap" }}>
                    {postData.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={postData.title}
                        style={{
                          width: "200px",
                          height: "auto",
                          borderRadius: "8px",
                          objectFit: "cover"
                        }}
                        onClick={() => setSelectedImg(img)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-4">{postData.title}</h1>
            <p>{postData.description}</p> {/* assuming your API returns description */}
            <p>
              <strong>Notice Date:</strong>{" "}
              {new Date(postData.date).toLocaleDateString()} {/* Just the date */}
            </p>
          </div>
        </div>
      </div>
      {selectedImg && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImg(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "transparent",
              border: "none",
              fontSize: "30px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            &times;
          </button>

          {/* Image */}
          <img
            src={selectedImg}
            alt={postData.title}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "8px",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}
    </div>
    
  );
}
