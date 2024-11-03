import Aboutus from "./aboutus/Aboutus";
import Appointment from "./appointment/Appointment";
import Carousel from "./carousel/carousel";
import Classes from "./classes/Classes";
import Facilities from "./facilities/Facilities";
import Teacher from "./teachers/Teacher";
import Testimonial from "./testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Facilities />
      <Aboutus />
      <Classes />
      <Appointment />
      <Teacher />
      <Testimonial />

    </div>
  )
}
