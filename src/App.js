import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";
import Home from "./Pages/Home.js"
import Resume from "./Pages/Resume.js"
import Projects from "./Pages/Projects.js"
import Footer from "./Pages/Footer"
import "./styles.css"

function App() {
  return (
    <div style={{backgroundColor: 'rgb(229, 231, 235)'}}>
      <Navbar />
      <Home />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;