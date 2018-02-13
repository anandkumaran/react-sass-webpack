import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	render() {
		return (
			<li className="TodoItem">
				{this.props.propItem.title}
			</li>
		);
	}
}

TodoItem.propTypes = {
  propItem: PropTypes.object
}

export default TodoItem;