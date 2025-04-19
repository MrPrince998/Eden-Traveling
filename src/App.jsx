import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import TourPage from "./pages/TourPage";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home", { replace: true });
    }
  }, [location, navigate]);
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/tour" element={<TourPage />} />
      </Routes>
    </>
  );
}

export default App;
