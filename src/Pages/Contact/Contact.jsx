import Social from '../../Componenets/Social/Social'
import './Contact.scss'

const Contact = () => {
  return (
  <div className="contact">
    <h1>Get in Touch</h1>
    <span>
        lorem ipsum dolor sit amet consectetur adipisicing elit.
    </span>
    
    <div className="socials">
        <Social  logo={github} title="GitHub"/>

    </div>
    </div>
  )
}

export default Contact