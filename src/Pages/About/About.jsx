import  InfoCard  from "../../Componenets/InfoCard/InfoCard"
import "./About.scss"

const About = () => {
  return (
    <div className="about" id="about">
      <div className="name">
        <div>
          <h1 className="txt">
            AB<br /> OU
            </h1>
        </div>
        <h1 className="txt lg">T</h1>
        <div className="me">ME</div>
      </div>

      <div className="info">
        <InfoCard title="About Me" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi aut eligendi pariatur, soluta dolorum ipsa vitae et tempora nihil provident porro est. Reiciendis nisi animi nihil vitae quia rem." />
        <InfoCard title="Education" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi aut eligendi pariatur, soluta dolorum ipsa vitae et tempora nihil provident porro est. Reiciendis nisi animi nihil vitae quia rem." />
        <InfoCard title="Skills" details="lorem ipsumn" /> 

      </div>
    </div>
  )
}

export default About