export let cart = JSON.parse(localStorage.getItem('cart')) || [];	 

function saveToLocalStorage() {
	localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartQuantityDisplay() {
	const cartData = localStorage.getItem('cart');
	const totalQuantity = cartData ? JSON.parse(cartData).reduce((sum, item) => sum + item.quantity, 0) : 0;
	document.querySelector('.js-cart-quantity').innerHTML = totalQuantity;
}
updateCartQuantityDisplay();

export function addToCart(productId) {
	let matchingItem;
	const productQuantity = Number(document.querySelector(`.js-product-quantity-${productId}`).value);

	cart.forEach((item) => {
		if (productId === item.productId) {
			matchingItem = item;
		}
	});
	
	if (matchingItem) {
		matchingItem.quantity += productQuantity;
	} else {
		cart.push({
			productId: productId,
			quantity: productQuantity
		});
	}

	let cartQuantity = 0;

	cart.forEach((item) => {
		cartQuantity += item.quantity;
	});

	document.querySelector('.js-cart-quantity')
		.innerHTML = cartQuantity;
	saveToLocalStorage();
	updateCartQuantityDisplay()
}

export function deleteItemFromCart(productId) {
	const newCart = [];

	cart.forEach((item) => {
		if (productId !== item.productId) {
			newCart.push(item);
		}
	});

	cart = newCart;
	saveToLocalStorage();
	updateCartQuantityDisplay()
}
