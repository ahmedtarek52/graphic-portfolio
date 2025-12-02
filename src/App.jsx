import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import useScrollToTop from "./hooks/useScrollToTop";
import "./app.css";


export default function App() {
  useScrollToTop();

  return (
    <div className="bg-black text-white">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}
