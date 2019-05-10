import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Nathaniel'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<React.Fragment>
				<a href="#" class="cart-link">
					Cart<span class="cart-link__number">4</span>
				</a>
			</React.Fragment>
		);
	}
}

const cartBtn = document.getElementById('cartBtn');

ReactDOM.render(<Layout />, cartBtn);
