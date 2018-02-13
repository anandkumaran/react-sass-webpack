import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.propTodo) {
      todoItems = this.props.propTodo.map(todo=> {
        return (
          <TodoItem key={todo.id} propItem={todo} />
        );
      })
    }
    return (
      <ul className="Todos">
        <h3>Todo List</h3>
        {todoItems}
      </ul>
    );
  }
}

Todos.propTypes = {
  propTodo: PropTypes.array
}

export default Todos;