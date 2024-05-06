import Booking from "../ui/Booking";
import Feature from "../ui/Feature";
import Hero from "../ui/Hero";
import Meal from "../ui/Meal";
import Seen from "../ui/Seen";
import Story from "../ui/Story";

function Home() {
  return (
    <div>
      <Hero />
      <Seen />
      <Meal />
      <Feature />
      <Story />
      <Booking />
    </div>
  );
}

export default Home;
