import React,{ Component } from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://my-json-server.typicode.com/shail-git/Robofriends/robots')
		.then(response => response.json())
		.then(robots => this.setState({robots:robots}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render(){
		const {robots,searchfield}= this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ?
			 <h1>Loading....</h1> :
			 (
				<div className='tc'>
				  	<h1>ROBOFRIENDS</h1>
				  	<Searchbox searchChange={this.onSearchChange}/>
				  	<Scroll>
					  	<ErrorBoundry>
					  		<Cardlist robots={filteredRobots} />
					  	</ErrorBoundry>
				  	</Scroll>
			  	</div>
			);
	}
}

export default App;