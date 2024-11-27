import { useState } from "react";
import appointmentImage from "/assets/frontend_assets/img/appointment.jpg";

export default function Contactus() {
  const [formData, setFormData] = useState({
    guardianName: "",
    guardianEmail: "",
    childName: "",
    childAge: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        
      
        if (response.ok) {
        //   alert("Form submitted successfully!");
          setResponseMessage("Form submitted successfully!");
          setFormData({
            guardianName: "",
            guardianEmail: "",
            childName: "",
            childAge: "",
            message: "",
          });
        } else {
          const error = await response.json();
          setResponseMessage(`Error: ${error.message}`);
        }
      } catch (err) {
        console.error("Error submitting form:", err);
        setResponseMessage("Something went wrong. Please try again.");
      }
      
      
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded">
          <div className="row g-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <h1 className="mb-4">Application</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="guardianName"
                          placeholder="Guardian Name"
                          value={formData.guardianName}
                          onChange={handleChange}
                        />
                        <label htmlFor="guardianName">Guardian Name</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control border-0"
                          id="guardianEmail"
                          placeholder="Guardian Email"
                          value={formData.guardianEmail}
                          onChange={handleChange}
                        />
                        <label htmlFor="guardianEmail">Guardian Email</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="childName"
                          placeholder="Child Name"
                          value={formData.childName}
                          onChange={handleChange}
                        />
                        <label htmlFor="childName">Child Name</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="childAge"
                          placeholder="Child Age"
                          value={formData.childAge}
                          onChange={handleChange}
                        />
                        <label htmlFor="childAge">Child Age</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control border-0"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "100px" }}
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                {responseMessage}
                {/* <img
                  className="position-absolute w-100 h-100 rounded"
                  src={appointmentImage}
                  style={{ objectFit: "cover" }}
                  alt="Appointment"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
