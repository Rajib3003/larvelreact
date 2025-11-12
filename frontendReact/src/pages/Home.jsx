// import Aboutus from "./aboutus/Aboutus";
// import Appointment from "./appointment/Appointment";
import AdmissionInformation from "./admission-information/AdmissionInformation";
import Carousel from "./carousel/Carousel";
import Classes from "./classes/Classes";
import Event from "./event/event";
import Facilities from "./facilities/Facilities";
import Teacher from "./teachers/Teacher";
import Testimonial from "./testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Facilities />
      <AdmissionInformation />
      <Event />
      {/* <Aboutus /> */}
      <Classes />
      {/* <Appointment /> */}
      <Teacher />
      <Testimonial />

    </div>
  )
}
