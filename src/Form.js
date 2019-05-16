import React, { Component } from 'react';

class Form extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			date: '',
			time: '',
			guests: 0
		}
	}

	handleChange = (e) => {
		console.log(e.target.value)
		// this.setState({e.target.[name]: e.target.value })
	}

	render() {
		return (
			<form >
				<input onChange={this.handleChange} type="text" name="name"  placeholder="Name"/>
				<input onChange={this.handleChange} type="text" name="date" placeholder="Date (mm/ddd)"/>
				<input onChange={this.handleChange} type="text" name="time" placeholder="Time"/>
				<input onChange={this.handleChange} type="number" name="guests" placeholder="Guests"/>
				<button> Cancel </button>
			</form>)
	}
}

export default Form;