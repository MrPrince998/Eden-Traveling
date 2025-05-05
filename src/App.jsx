import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import TourPage from "./pages/TourPage";
import TourFilterProvider from "./context/TourFilterProvider";
import ArticlePage from "./pages/ArticlePage";
import ArticleCard from "./components/ArticleCard";
import SingleArticles from "./components/SingleArticles";

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
        <Route
          path="/home"
          element={
            <TourFilterProvider>
              <HomePage />
            </TourFilterProvider>
          }
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages" element={<Pages />} />

        <Route
          path="/tour"
          element={
            <TourFilterProvider>
              <TourPage />
            </TourFilterProvider>
          }
        />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/article/:id" element={<SingleArticles />} />
      </Routes>
    </>
  );
}

export default App;
