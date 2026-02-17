import Service from "./Service";
import About from "./About";
import Menu from "./Menu";
import Booking from "./Booking";
import Team from "./Team";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <>
      <Service section={true} />
      <About section={true} />
      <Menu />
      <Booking />
      <Team section={true} />
      <Testimonial />
    </>
  );
}

export default Home;