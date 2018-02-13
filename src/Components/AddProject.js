import React, {Component} from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }
  formSubmit(e) {
    e.preventDefault();
    this.setState({
      newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }
    }, function() {
      // console.log(this.state)
      this.props.addProject(this.state.newProject);
    });
  }
  render() {
    let categoryOptions = this.props.categories.map(category=> {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div className='AddProject'>
        <h3>Add Project</h3>

        <form onSubmit={this.formSubmit.bind(this)}>
          <div>
          <label>Title</label>: <input type="text" ref="title" />
          </div><br />
          <div>
          <label>Category</label>: <select ref="category">{categoryOptions}</select>
          </div><br />
          <div>
          <input type="submit" value="Submit" />
          </div>
        </form><br /><br />
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func
}

export default AddProject;