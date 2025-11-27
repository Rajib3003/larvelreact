/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function NoticeEdit() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  const [noticeTypes, setNoticeTypes] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [newImages, setNewImages] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    noticeType: "",
    images: [],
  });

  // Fetch notice + notice types
  useEffect(() => {
    // 1️⃣ Fetch notice types
    fetch(`${baseApiUrl}/notice-type`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) setNoticeTypes(data.data);
      });

    // 2️⃣ Fetch notice by slug
    fetch(`${baseApiUrl}/notice/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        const n = data.data;
        setFormData({
          title: n.title,
          date: n.date.split("T")[0],
          noticeType: n.noticeType?._id || "", // <-- important
          images: n.images || [],
        });
        setPreviewImages(n.images || []);
      });
  }, [slug]);

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setNewImages(files);
    const previews = files.map((f) => URL.createObjectURL(f));
    setPreviewImages(previews);
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateData = new FormData();
    updateData.append("title", formData.title);
    updateData.append("date", formData.date);
    updateData.append("noticeType", formData.noticeType);
    newImages.forEach((img) => updateData.append("images", img));

    try {
      const res = await fetch(`${baseApiUrl}/notice/${slug}`, {
        method: "PATCH",
        body: updateData,
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed");
      Swal.fire("Success", "Notice updated successfully!", "success");
      navigate("/admin/notice");
    } catch (err) {
      Swal.fire("Error", "Failed to update notice.", "error");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Edit Notice</h3>
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
              <option key={type._id} value={type._id}>
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

        <button type="submit" className="btn btn-primary">Update Notice</button>
      </form>
    </div>
  );
}
