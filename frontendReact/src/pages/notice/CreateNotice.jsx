import { useState } from "react";
import PropTypes from "prop-types";

export default function CreateNotice({ onNoticeCreated }) {
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

   try {
    const response = await fetch(
      "https://typescript-express-mongo-db.vercel.app/api/notice",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    // if (!response.ok) throw new Error("Failed to create notice");

    const result = await response.json();

    

    // Pass only the new notice object to parent
    onNoticeCreated(result.data); 
console.log("testing notice",result )
    // Show success alert
    alert("Notice created successfully!");

    // Close the modal
    const modalEl = document.getElementById("staticBackdrop");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    modal.hide();

    // Reset form
    setFormData({
      title: "",
      date: new Date().toISOString().split("T")[0],
      description: "",
      link: "",
      photo: "",
    });
  } catch (error) {
    console.error(error);
    alert("Failed to create notice ========================"); // Only show this if fetch fails
  }
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
}

CreateNotice.propTypes = {
  onNoticeCreated: PropTypes.func.isRequired,
};

