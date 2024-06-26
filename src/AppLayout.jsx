import { Outlet } from "react-router-dom";
import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";

function AppLayout() {
  return (
    <div className="applayout">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default AppLayout;
