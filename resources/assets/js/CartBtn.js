import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CartBtn extends Component {
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
			<a href="#" className="cart-link">
				Cart<span className="cart-link__number">4</span>
			</a>
		);
	}
}

const CartBtnRoot = document.getElementById('CartBtnRoot');

ReactDOM.render(<CartBtn />, CartBtnRoot);
