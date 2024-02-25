import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<Home />} />
          <Route path="/hell" element={<Home />} />
          <Route path="/us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
