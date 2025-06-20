import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skill from "./components/Skills/Skill";
import Project from "./components/Project/Project";
import Certificate from "./components/Certificate/Certificate";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return ( 
  
  <div className="App">
    <Navbar/>
    <Intro />
    <Skill />
    <Project />
    <Certificate />
    <Contact />
    <Footer />
  </div>
  );
}

export default App;
