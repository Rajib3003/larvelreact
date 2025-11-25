import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function CreateNotice({ onNoticeCreated }) {
  const [formData, setFormData] = useState({
    title: "",
    date: new Date().toISOString().split("T")[0],
    noticeType: "",
    images: [],
  });

  const [noticeTypes, setNoticeTypes] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch notice types
  useEffect(() => {
    fetch("https://ph-tour-managment-system.vercel.app/api/v1/notice/notice-types")
      .then((res) => res.json())
      .then((data) => {
        setNoticeTypes(data?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch notice types:", err);
        setLoading(false);
      });
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, images: files }));

    // Preview
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(urls);
  };

const token = document.cookie
  .split("; ")
  .find(row => row.startsWith("accesstoken="))
  ?.split("=")[1]; // token value

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("date", formData.date);
    data.append("noticeType", formData.noticeType);
    formData.images.forEach((file) => data.append("images", file));

    try {
      const response = await fetch(
        // "https://ph-tour-managment-system.vercel.app/api/v1/notice/create",
        "http://localhost:5000/api/v1/notice/create",
        {
          method: "POST",
          body: data,          // FormData
          credentials: "include", // ✅ must for cookies
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );
      console.log("response",response)
     

      const result = await response.json();

      
      
      if (!response.ok) throw new Error(result.message || "Failed to create notice");

      onNoticeCreated(result.data);

      // Reset
      setFormData({
        title: "",
        date: new Date().toISOString().split("T")[0],
        noticeType: "",
        images: [],
      });
      setPreviewImages([]);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading notice types...</p>;

  return (
    <form onSubmit={handleSubmit}>
      {/* Title */}
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

      {/* Date */}
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

      {/* Notice Type */}
      <div className="mb-3">
        <label className="form-label">Notice Type*</label>
        <select
          name="noticeType"
          value={formData.noticeType}
          onChange={handleChange}
          className="form-control"
          required
        >
          <option value="">-- Select Notice Type --</option>
          {noticeTypes.map((type) => (
            <option key={type._id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>

      {/* Multi Image */}
      <div className="mb-3">
        <label className="form-label">Images</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="form-control"
        />
      </div>

      {/* Preview */}
      {previewImages.length > 0 && (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "15px" }}>
          {previewImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`preview-${i}`}
              style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "5px" }}
            />
          ))}
        </div>
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

CreateNotice.propTypes = {
  onNoticeCreated: PropTypes.func.isRequired,
};