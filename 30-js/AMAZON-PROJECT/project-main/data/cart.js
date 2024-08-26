export let cart = JSON.parse(localStorage.getItem('cart'));
console.log(cart);
if(!cart) {
	cart = [
		{
			productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
			quantity: 2,
			deliveryOptionId: '1'
		},
		{
			productId: 'dd82ca78-a18b-4e2a-9250-31e67412f98d',
			quantity: 12,
			deliveryOptionId: '2'
		}
	];
}


function saveToStorage() {
	localStorage.setItem('cart', JSON.stringify(cart));
}
export function addToCard(productId, quantity) {
	let matchingItem;
	cart.forEach((cartItem) => {
		if (productId === cartItem.productId) {
			matchingItem = cartItem;
		}
	});

	if (matchingItem) {
		matchingItem.quantity = quantity;
	} else {
		cart.push({
			productId: productId,
			quantity: 1,
			deliveryOptionId: '1'
		});
	}

	saveToStorage();
}



export function totalItemCount() {
	let cartQuantity = 0;
	cart.forEach((cartItem) => {
		cartQuantity += cartItem.quantity;
	});
	
	return cartQuantity;
	
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

