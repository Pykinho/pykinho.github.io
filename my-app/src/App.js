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
      <BrowserRouter basename="/">
        <NavBar />
        {/* <div className="page"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<Home />} />
          <Route path="/hell" element={<Home />} />
          <Route path="/us" element={<AboutUs />} />
          {/* <Route path="/materials" element={<Materials />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/schedule" element={<SchedulePage />} /> */}
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
