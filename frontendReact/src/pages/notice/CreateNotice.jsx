import { useState } from "react";
import PropTypes from "prop-types";

export default function CreateNotice({ onNoticeCreated }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    date: new Date().toISOString().split("T")[0],
    description: "",
    link: "",
    photo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
   try {
    const response = await fetch(
      "https://typescript-express-mongo-db.vercel.app/api/notice",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    

    const result = await response.json();

    if (!response.ok) {
      setErrorMessage(result.message || "Failed to create notice");
      return;
    }

    
    onNoticeCreated(result.data); 

    
    

    
    const modalEl = document.getElementById("staticBackdrop");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    modal.hide();

    
    setFormData({
      title: "",
      date: new Date().toISOString().split("T")[0],
      description: "",
      link: "",
      photo: "",
    });
  } catch (error) {
    console.error(error);
    setErrorMessage(error.message || "Failed to create notice"); 
  }
  };

  return (
    <>
    
    <form onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <div className="mb-3">
        <label className="form-label">Title*</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Date*</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Link</label>
        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Photo URL</label>
        <input
          type="text"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </>
  );
}

CreateNotice.propTypes = {
  onNoticeCreated: PropTypes.func.isRequired,
};

