import { useState } from 'react'
import ProjectTemplate from '../../Componenets/ProjectTemplate/ProjectTemplate'
import './Projects.scss'
import adminProject from "../../assets/admin-dashboard.png"

const Projects = () => {

    const [tags] = useState(["React","CSS/SCSS","NodeJS","Express","More..."])
  return (
  
  <div className="projects-wrapper">
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
        img={adminProject}
        />
          <ProjectTemplate 
        projectName="Admin Dashboard" 
        projectDesc="Project description..." 
        tags={tags}
        img={adminProject}
        />
        <ProjectTemplate /> 
        <ProjectTemplate />
  </div>
  )
}

export default Projects