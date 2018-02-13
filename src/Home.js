import React, {Component} from 'react';
import { Alert } from 'reactstrap';

class HomePage extends Component {
	constructor() {
    super();
	    this.state = {
	    	visible: true
	    };	

	    this.onDismiss = this.onDismiss.bind(this);
	}

  onDismiss() {
    this.setState({ visible: false });
  }

	render() {
		return (
			<div className='container'>
			<title>Home Page - newLook </title>
				<Alert color="primary" isOpen={this.state.visible} toggle={this.onDismiss}>
        This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
			</div>
		)
	}
}


export default HomePage;