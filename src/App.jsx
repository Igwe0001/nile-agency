import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Homeinfo from "./components/Homeinfo";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-[100vh] h-full overflow-hidden">
      <Nav />
      <Hero />
      <Homeinfo />
      <Newsletter />
      <Footer/>
    </div>
  );
}

export default App;
