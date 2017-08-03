import React from 'react';

import TextCard from '../TextCard';
import LinkButton from '../LinkButton';
import './ProjectCard.css';

const ProjectCard = ({ projectObj }) => (
    <TextCard>
        <img className='project-image' src={projectObj.imageLink} alt={projectObj.title}/>
        <h1 className="center">{projectObj.title}</h1>
        <p>{projectObj.description}</p>
        <LinkButton link={projectObj.projectLink} target="_blank" text={projectObj.buttonText} />
    </TextCard>
);

export default ProjectCard;