import Social from '../../Componenets/Social/Social'
import './Contact.scss'
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import whatsapp from "../../assets/whatsapp.png";


const Contact = () => {
  return (
  <div className="contact">
    <h1>Get in Touch</h1>
    <span>
        lorem ipsum dolor sit amet consectetur adipisicing elit.
    </span>
    
    <div className="socials">
        <Social  logo={github} title="GitHub"/>
        <Social  logo={linkedin} title="LinkedIn"/>
        <Social  logo={twitter} title="Twitter"/>
        <Social  logo={whatsapp} title="WhatsApp"/>
        <Social  logo={github} title="GitHub"/>


    </div>
    </div>
  )
}

export default Contact