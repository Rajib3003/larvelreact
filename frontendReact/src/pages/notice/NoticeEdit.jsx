/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function NoticeEdit() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  const fileInputRef = useRef(null); 

  const [noticeTypes, setNoticeTypes] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);

  const [noticeId, setNoticeId] = useState("");

  

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    noticeType: "",
  });

  const [initialNoticeTypeId, setInitialNoticeTypeId] = useState("");
  const [initialNoticeTypeName, setInitialNoticeTypeName] = useState("");

  // Load Notice Types + Notice
  useEffect(() => {
    fetch(`${baseApiUrl}/notice/notice-types`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setNoticeTypes(
            data.data.map((t) => ({
              _id: String(t._id),
              name: t.name,
            }))
          );
        }
      });

    fetch(`${baseApiUrl}/notice/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        const n = data.data;
        const nid = String(n.noticeType?._id || "");
        const nname = n.noticeType?.name || "";

        setFormData({
          title: n.title,
          date: n.date.split("T")[0],
          noticeType: nid,
        });

        setInitialNoticeTypeId(nid);
        setInitialNoticeTypeName(nname);

        setOldImages(n.images || []);
        setPreviewImages(n.images || []);

        setNoticeId(n._id);
      });
  }, [slug]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

// --------------------------
// ★ THIS PART IS THE FIX ✔
// --------------------------
const handleFileChange = (e) => {
  const files = Array.from(e.target.files);

  if (files.length > 0) {
    setNewImages(files);
    setPreviewImages(files.map((f) => URL.createObjectURL(f)));
    console.log("ifpreviewImages====",previewImages)
  } else {
    fileInputRef.current.value = ""; 
    setNewImages([]);
    setPreviewImages(oldImages);
    console.log("else===previewImages====",previewImages)
  }
};
// --------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = new FormData();

    updateData.append("title", formData.title);
    updateData.append("date", formData.date);

    if (formData.noticeType !== initialNoticeTypeId) {
      updateData.append("noticeType", formData.noticeType);
    }

    // Image logic
    if (newImages.length > 0) {
      newImages.forEach((file) => updateData.append("files", file));
      updateData.append("deleteImages", JSON.stringify(oldImages));
    }

    try {
      const res = await fetch(`${baseApiUrl}/notice/${noticeId}`, {
        method: "PATCH",
        body: updateData,
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed");

      Swal.fire("Success", "Notice updated successfully!", "success");
      navigate("/student-profile");
    } catch (err) {
      Swal.fire("Error", "Failed to update notice.", "error");
      console.error(err);
    }
  };

  const displayedNoticeTypes = () => {
    const list = noticeTypes.map((t) => ({
      _id: String(t._id),
      name: t.name,
    }));

    if (!initialNoticeTypeId) return list;

    if (!list.some((t) => t._id === initialNoticeTypeId)) {
      return [{ _id: initialNoticeTypeId, name: initialNoticeTypeName }, ...list];
    }

    return list;
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
            value={String(formData.noticeType)}
            onChange={handleChange}
            className="form-control"
            required
          >
            {displayedNoticeTypes().map((type) => (
              <option key={type._id} value={type._id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        {/* Images */}
        <div className="mb-3">
          <label className="form-label">Images</label>
          <input
            type="file"
            multiple
            ref={fileInputRef} // ★ required
            onChange={handleFileChange}
            className="form-control"
          />
        </div>

        {/* Preview */}
        {previewImages.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "15px",
            }}
          >
            {previewImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="preview"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            ))}
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Update Notice
        </button>
      </form>
    </div>
  );
}
