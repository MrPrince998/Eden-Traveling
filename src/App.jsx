import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() =>  {
    if(location.pathname === "/" ) {
      navigate("/home", { replace: true });
    }
  },[location,navigate])
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
