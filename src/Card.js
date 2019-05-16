import React, { Component } from 'react';

class Card extends Component {
	// constructor() {
	// 	super();
	// 	this.state= {

	// 	}
	// }

	render(props) {
		return (
			<div>
				<h1>{this.props.name}</h1>
				<h4>{this.props.date}</h4>
				<h4>{this.props.time}</h4>
				{/*<h4> Number of guests: {this.props.}*/}
			</div>
			)
	}

}

export default Card;