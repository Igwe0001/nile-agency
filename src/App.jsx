import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import Home from "../pages/Home";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import About from "../pages/About";

function App() {
  return (
    <div className="min-h-[100vh] h-full overflow-hidden">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
