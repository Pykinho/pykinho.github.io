import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs/AboutUs";
import News from "./pages/News/News";
import Hell from "./pages/Hell/Hell";

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/hell" element={<Hell />} />
        <Route path="/us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
