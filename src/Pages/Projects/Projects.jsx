import { useState } from 'react'
import ProjectTemplate from '../../Componenets/ProjectTemplate/ProjectTemplate'
import './Projects.scss'
import adminProject from "../../assets/Stocksense.png"
import adminProject2 from "../../assets/EcoDispose.png"



const Projects = () => {

    const [tags] = useState(["React","CSS/SCSS","NodeJS","Express","More..."])
  return (
  
  <div className="projects-wrapper" id='projects'>
    <div></div>
        <ProjectTemplate 
        projectName="Admin Dashboard" 
        projectDesc="Project description..." 
        tags={tags}
        img={adminProject}
        />
        <ProjectTemplate 
        projectName="Admin Dashboard" 
        projectDesc="Project description..." 
        tags={tags}
        img={adminProject2}
        />
    <div></div>
  </div>
  )
}

export default Projects