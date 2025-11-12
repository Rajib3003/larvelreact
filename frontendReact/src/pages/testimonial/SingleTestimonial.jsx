import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function SingleTestimonial({ image, text, name, profession }) {
  const [textlimit, setTextlimit] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      setTextlimit(window.innerWidth <= 576 ? 40 : 20);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return text;
  };

  return (
    <div
      className="testimonial-item bg-light rounded p-lg-3 p-2 d-flex flex-column justify-content-between"
      style={{ height: "300px" }}
    >
      <p className="fs-5 mb-2 mb-sm-4">{truncateText(text, textlimit)}</p>

      <div
        className="d-flex align-items-center bg-white me-n5 mt-n2 mt-sm-0"
        style={{ borderRadius: "50px 0 0 50px" }}
      >
        <img
          className="img-fluid flex-shrink-0 rounded-circle"
          src={image}
          alt={name}
          style={{ width: "80px", height: "80px" }}
        />
        <div className="ps-3">
          <h3 className="mb-1">{name}</h3>
          <span>{profession}</span>
        </div>
      </div>
    </div>
  );
}


SingleTestimonial.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
  };
