import React, {Component} from 'react';
import ProjectItems from './ProjectItems';
import PropTypes from 'prop-types';

class ProjectsClass extends Component {
  deleteProject(inde) {
    this.props.onDelete(inde);
  }
  render() {
    let projectItems;
    if(this.props.projectProp) {
      projectItems = this.props.projectProp.map(project=> {
        return (
          <ProjectItems key={project.id} propItems={project} onDelete={this.deleteProject.bind(this)}/>
        );
      })
    }
    return (
      <ul className='ProjectsClass'>
        My Projects
        {projectItems}
      </ul>
    );
  }
}

ProjectsClass.propTypes = {
  onDelete: PropTypes.func,
  projectProp: PropTypes.array
}

export default ProjectsClass;