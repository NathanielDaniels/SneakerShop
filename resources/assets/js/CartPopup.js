import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CartPopup extends Component {
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
			<a href="#" class="cart-link">
				Cart<span class="cart-link__number">4</span>
			</a>
		);
	}
}

const CartPopup = document.getElementById('CartPopup');

ReactDOM.render(<CartPopup />, CartPopup);
