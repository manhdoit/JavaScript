import { cart, removeFromCart, totalItemCount } from '../data/cart.js';
import {products} from '../data/products.js';
import { formatCurrency } from './utils/money.js';
let cartSummaryHTML = '';
cart.forEach((cartItem) => {
	const productId = cartItem.productId;
	let matchingProduct;
	products.forEach((product) => {
		if(product.id === productId) {
			matchingProduct = product
		}
	})
	cartSummaryHTML += 
	`
	<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
		<div class="delivery-date">
			Delivery date: Tuesday, June 21
		</div>

		<div class="cart-item-details-grid">
			<img class="product-image"
				src="${matchingProduct.image}">

			<div class="cart-item-details">
				<div class="product-name">
					${matchingProduct.name}
				</div>
				<div class="product-price">
					$${formatCurrency(matchingProduct.priceCents)}
				</div>
				<div class="product-quantity">
					<span>
						Quantity: <span class="quantity-label js-quantity-label" data-product-id=${matchingProduct.id}>
						${cartItem.quantity}
						</span>
					</span>
					<span class="update-quantity-link link-primary js-update-quantity-link" data-product-id=${matchingProduct.id}>
						Update
					</span>
					<div class="cart-item-quantity-container">
						<input type="number" class="quantity-input" value="${cartItem.quantity}" data-product-id=${matchingProduct.id}>
						<span class="save-quantity-link js-save-quantity-link link-primary"data-product-id=${matchingProduct.id}>Save</span>
					</div>
					<span class="delete-quantity-link link-primary js-delete-link" data-product-id=${matchingProduct.id}>
						Delete
					</span>
				</div>
			</div>

			<div class="delivery-options">
				<div class="delivery-options-title">
					Choose a delivery option:
				</div>
				<div class="delivery-option">
					<input type="radio" checked
						class="delivery-option-input"
						name="delivery-option-${matchingProduct.id}">
					<div>
						<div class="delivery-option-date">
							Tuesday, June 21
						</div>
						<div class="delivery-option-price">
							FREE Shipping
						</div>
					</div>
				</div>
				<div class="delivery-option">
					<input type="radio"
						class="delivery-option-input"
						name="delivery-option-${matchingProduct.id}">
					<div>
						<div class="delivery-option-date">
							Wednesday, June 15
						</div>
						<div class="delivery-option-price">
							$4.99 - Shipping
						</div>
					</div>
				</div>
				<div class="delivery-option">
					<input type="radio"
						class="delivery-option-input"
						name="delivery-option-${matchingProduct.id}">
					<div>
						<div class="delivery-option-date">
							Monday, June 13
						</div>
						<div class="delivery-option-price">
							$9.99 - Shipping
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	`;
});


document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
function totalItemCountDisplay(item){
	document.querySelector('.js-checkout-total-item').innerText = totalItemCount();
}
totalItemCountDisplay();

function updateCartItemQuantity() {
	const updateQuantityLinks = document.querySelectorAll('.js-update-quantity-link');
	updateQuantityLinks.forEach((item) => {
		item.addEventListener('click', () => {
			const productId = item.getAttribute('data-product-id');
			const itemQuantity = document.querySelector(`.js-quantity-label[data-product-id="${productId}"]`);
			itemQuantity.classList.add('disable');
			item.classList.add('disable');
			item.closest('.cart-item-container').classList.add('is-editing-quantity');
		})
	})
}
updateCartItemQuantity();
document.querySelectorAll('.js-delete-link')
	.forEach((link) => {
		link.addEventListener('click', () => {
			const productId = link.dataset.productId;
			
			removeFromCart(productId);
			totalItemCountDisplay();
			const container = document.querySelector(
				`.js-cart-item-container-${productId}`
			);
			container.remove();
			
		})
	})

const saveQuantityLinks = document.querySelectorAll('.js-save-quantity-link');

saveQuantityLinks.forEach((link) => {
	link.addEventListener('click', () => {
		const productId = link.dataset.productId;
	})
})