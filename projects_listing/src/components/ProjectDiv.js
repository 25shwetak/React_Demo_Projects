import React from 'react';
import ProjectCard from './ProjectCard';
import { MdFavorite, MdTrendingUp } from 'react-icons/md';


const ProjectDiv = ({title, list, label}) => {
  return (
    <div>
      <h2 className="text-left">
        {label === 'like' ? <MdFavorite/> : <MdTrendingUp/> }
        {title}
      </h2>
      { list.map((project) => <ProjectCard project={project} key={project.id}/> )}
    </div>
  )
}

export default ProjectDiv;
