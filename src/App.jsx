import './App.scss'
import  Header  from "./Componenets/Header/Header"
import Social from './Componenets/Social/Social';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';


import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import email from "./assets/email.png";



function App() {
  return (
    <div className="App">
      <Header />

    <main>
      <div className="page" id="home ">
       <Home /> 
      </div>
      <div className="page" id="about">
       <About /> 
      </div>

      <div className="social-wrapper">
        <h2  className="quick-links">Quick Links</h2>

        <div className="socials">
          <Social logo={github} title="GitHub" />
          <Social logo={linkedin} title="LinkedIn" />
          <Social logo={email} title="induwarafernando9@gmail.com" />
          <Social logo={github} title="GitHub" />

        </div>
      </div>

      <div className="page" id="projects">
        <Projects />
      </div>

      <div className="page" id="contact">
        <Contact />
      </div>
    </main>
  </div>
  );
}

export default App
