import React, { Component } from 'react'

import ProjectCard from '../components/ProjectCard';
import ProjectsData from '../data/Projects';

class IndexPage extends Component {
  render() {

    let createProjectItem = (object, index) => {
      return <ProjectCard 
                key={index + object} 
                projectObj={object} />
    }

    return (
      <div>
        {ProjectsData.map(createProjectItem)}
      </div>
    )
  }
}

export default IndexPage
