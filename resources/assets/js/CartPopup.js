import React, { Component } from 'react';

export default class CartPopup extends Component {
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
			<section id="cart-popup">
				<div className="cart-title">
					<div className="title">My Cart</div>
				</div>
				<div className="cart-items">
					<div className="item-container">
						<div className="item">
							<img src="/img/products/Adidas-Yeezy-Boost-350v2-hyperspace-lightgrey.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="item">
							<img src="/img/products/Adidas-Yeezy-Boost-350v2-hyperspace-lightgrey.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="item">
							<img src="/img/products/Adidas-Yeezy-Boost-350v2-hyperspace-lightgrey.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="item">
							<img src="/img/products/Adidas-Yeezy-Boost-350v2-hyperspace-lightgrey.png" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
				</div>
				<div className="product-total">
					<div className="inside-container">
						<div className="title">Total</div>
						<div className="number">x4</div>
					</div>
				</div>
				<div className="price-total">
					<div className="inside-container">
						<div className="title">Total</div>
						<div className="number">$3,000</div>
					</div>
				</div>
				<div className="checkout">
					<div className="inside-container">
						<div className="title">Checkout</div>
						<span className="ti-shopping-cart" />
					</div>
				</div>
			</section>
		);
	}
}
