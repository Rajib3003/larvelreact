import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation,Navigate } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Aboutus from "./pages/aboutus/Aboutus";
import Classes from "./pages/classes/Classes";
import Testimonial from "./pages/testimonial/Testimonial";
import Appointment from "./pages/appointment/Appointment";
import Teacher from "./pages/teachers/Teacher";
import Facilities from "./pages/facilities/Facilities";
import Homework from "./pages/homework/Homework";
import Contactus from "./pages/contactus/Contactus";
import Notice from "./pages/notice/Notice";
import TeacherList from "./pages/teachers/TeacherList";
import TeacherDetails from "./pages/teachers/TeacherDetails";
import NoticeDetails from "./pages/notice/NoticeDetails";
import StudentProfile from "./pages/profile/StudentProfile";
import Login from "./layout/Login";
import PropTypes from "prop-types";
import AdmissionInformation from "./pages/admission-information/AdmissionInformation";
import Error from "./pages/errors/Error";
import Faqs from "./pages/faqs/Faqs";
import NoticeEdit from "./pages/notice/NoticeEdit";



const baseURLFrontend = import.meta.env.VITE_FRONTEND_BASE_PATH;
function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedLoginState = localStorage.getItem("isLoggedIn");
    const lastActiveTime = localStorage.getItem("lastActiveTime");
    const oneHour = 10 * 60 * 1000;

    if (savedLoginState === "true" && Date.now() - lastActiveTime < oneHour) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("lastActiveTime", Date.now());
    } else {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("lastActiveTime");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const interval = setInterval(() => {
      const lastActiveTime = localStorage.getItem("lastActiveTime");
      const oneHour = 10 * 60 * 1000;

      if (isLoggedIn && Date.now() - lastActiveTime >= oneHour) {
        setIsLoggedIn(false);        
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoggedIn]);  

  return (
    <Router basename={baseURLFrontend}>
      <ConditionalLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/team" element={<Teacher />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/homework" element={<Homework />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/noticedetails/:slug" element={<NoticeDetails />} />
          <Route path="/notice/edit/:slug" element={<NoticeEdit />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/teacherdetails/:id" element={<TeacherDetails />} />
          <Route path="/admission-information" element={<AdmissionInformation />} />
          <Route path="/error" element={<Error />} />
          <Route path="/faqs" element={<Faqs />} />
          
          <Route
            path="/student-profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <StudentProfile />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </ConditionalLayout>
    </Router>
  );
}

function ConditionalLayout({ children, isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const noHeaderFooter = location.pathname === "/login";

  return (
    <>
      {!noHeaderFooter && <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      <main>{children}</main>
      {!noHeaderFooter && <Footer />}
    </>
  );
}

ConditionalLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default App;
