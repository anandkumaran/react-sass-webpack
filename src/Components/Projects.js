import React, {Component} from 'react';
import ProjectsClass from './Project';
import Todos from './Todos';
import uuid from 'uuid';
import $ from 'jquery';
import AddProject from './AddProject';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }
  getProjects = () => {
    this.setState({
      projects: [{
        id: uuid.v4(),
        title: 'Web Design',
        category: 'Web App'
      },
      {
        id: uuid.v4(),
        title: 'Ecommerce',
        category: 'Web Development'
      },
      {
        id: uuid.v4(),
        title: 'Social Network',
        category: 'Mobile App'
      }]
    });
  }
  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({todos: data}, function() {
          console.log(this.state)
        })
      }.bind(this),
      fail: function(xhr, status, err) {
        console.log(err)
      }
    });
  }

  componentDidMount() {
    this.getProjects();
    // this.getTodos();
  }
  handleAddProject = (project) => {
    let addProject = this.state.projects;
    addProject.push(project);
    this.setState({projects:addProject});
  }
  handleDeleteProject = (ind) => {
    console.log(ind)
    let deleteProject = this.state.projects;
    let index = deleteProject.findIndex(x=>x.ind === ind);
    deleteProject.splice(index, 1);
    this.setState({projects:deleteProject});
  }
  render() {
    return (
      <div className='container'>
        <title>Projects - newLook</title>
        My App
        <ProjectsClass projectProp={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Todos propTodo={this.state.todos}/>
      </div>
    );
  }
}

export default Projects;