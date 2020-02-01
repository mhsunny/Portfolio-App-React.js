import React  from 'react';
import PROJECTS from '../data/projects';

const Project = props => {
    
        const {title, image, description, link } = props.project; 
        return(
            
           <div className="project col-md-4 col-xs-12">
               <a href={link} target="_blank" title={title}>
                <h3>{title}</h3>
                {image !='project0' ? <img src={image} alt={title} title={title} /> : ''}
                    
                </a>
                <p>{description}</p>
               
                <a href={link} target="_blank" title={title}>Website Link</a> 
            </div> 
        ) 
}

const Projects = () => (
            <div>
                <h2>Recent Projects</h2>
                <div className="container">
                <div className="row">
                   {
                       PROJECTS.map(PROJECT => (                       
                            <Project key={PROJECT.id} project={PROJECT}  /> 
                       ))
                   }
                </div>
                </div>
            </div>
        ) 

export default Projects;