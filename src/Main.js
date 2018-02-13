import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './Components/Projects';
import HomePage from './Home';
import AboutPage from './Components/Aboutus';
import Header from './Components/Header';
import 'bootstrap/scss/bootstrap.scss';
import './Stylesheets/Main.scss';


class Main extends React.Component {
  render() {
  	return (
  		<div>
  		<Header />
  		<Switch>
	  		<Route exact path='/' component={HomePage}/>
	  		<Route exact path='/projects' component={Projects}/>
	  		<Route exact path='/aboutus' component={AboutPage}/>
  		</Switch>
  		</div>
  	)
  }
}

export default Main;