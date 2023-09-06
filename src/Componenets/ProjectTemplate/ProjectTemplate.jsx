/* eslint-disable react/prop-types */

import Tag from '../Tag/Tag'
import './ProjectTemplate.scss'

const ProjectTemplate = ({projectName, projectDesc,tags,img}) => {
  return (
    <div className="project">
    <div className="project-details">
        <h2 className="project-name">{projectName}</h2>
        <span className="project-desc">{projectDesc}</span>

        <div className="tags">
            <h2 className="tech-stack">Technologies used:</h2>

        <div className="tags-wrapper">
        {tags && tags.map((tag) => {
          return <Tag key={projectName} title={tag} />
          
})}

         </div>
    </div>
</div>

<div className="project-image">
    <img src={img} alt="project" />
    
</div>

 </div>
  )
}

export default ProjectTemplate