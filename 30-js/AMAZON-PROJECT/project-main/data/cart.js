export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
	cart = [
		{
			productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
			quantity: 2
		},
		{
			productId: 'dd82ca78-a18b-4e2a-9250-31e67412f98d',
			quantity: 12
		}
	];
}


function saveToStorage() {
	localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCard(productId) {
	let matchingItem;
	cart.forEach((cartItem) => {
		if (productId === cartItem.productId) {
			matchingItem = cartItem;
		}
	});

	if (matchingItem) {
		matchingItem.quantity += 1;
	} else {
		cart.push({
			productId: productId,
			quantity: 1,
		});
	}

	saveToStorage();
}

export  function updateCartQuantity() {
	let cartQuantity = 0;
	cart.forEach((cartItem) => {
		cartQuantity += cartItem.quantity;
	});
	document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
	console.log(cart, cartQuantity);
}


export function removeFromCart(productId) {
	const newCart = [];

	cart.forEach((cartItem) => {
		if(cartItem.productId !== productId) {
			newCart.push(cartItem);
		}
	});
	cart = newCart;
	
	saveToStorage();
}