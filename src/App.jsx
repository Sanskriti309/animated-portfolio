import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>

      {/* Cursor */}
      <Cursor/>

      {/* First Section */}
      <section id="Homepage">
        <Navbar/>
        <Hero/>
      </section>

      {/* Second Section */}
      <section id="Services">
        <Parallax type="services" />
      </section>

      {/* Third Section */}
      <section>
        <Services/>
      </section>

      {/* Fourth Section */}
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>

      {/* Portfolio Section */}
      <Portfolio/>

      {/* Contact Section */}
      <section id="Contact">
        <Contact/>
      </section>

    </div>
  );
};

export default App;
