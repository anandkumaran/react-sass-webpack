import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProjectItems extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className='ProjectItems'>
        {this.props.propItems.title} - {this.props.propItems.category} <a id={this.props.propItems.id} onClick={this.deleteProject.bind(this, this.props.propItems.id)}>x</a>
      </li>
    );
  }
}

ProjectItems.propTypes = {
  onDelete: PropTypes.func,
  propItems: PropTypes.object
}

export default ProjectItems;