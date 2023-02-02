import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";
import Welcome from "./Pages/Welcome.js"
import AboutMe from "./Pages/AboutMe.js"
import Resume from "./Pages/Resume.js"
import Projects from "./Pages/Projects.js"
import Footer from "./Pages/Footer"
import "./styles.css"
// import NEWAboutMe from "./Pages/NEWAboutMe.js";

function App() {
  return (
    <div style={{backgroundColor: 'rgb(44, 44, 44)'}}>
      <Welcome />
      <Navbar />
      {/* <NEWAboutMe /> */}
      <AboutMe />
      <Resume />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

/*
    import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
    <MDBContainer>
      <h1>Book review</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In officiis
        ipsa harum quidem. Nihil alias laboriosam recusandae numquam cum facere,
        vitae illo enim tempore cupiditate, error, atque aspernatur quam dicta.
      </p>

      <h2>Spoiler alert!</h2>
      <h5>(Hover to reveal)</h5>

      <p class="spoiler">
        This season is gonna blow your mind ! Like this season is crazy dawg!
        You know what happens on the first episode ? You are not gonna believe
        me bro, like It's crazy dude !
      </p>
    </MDBContainer>
    */