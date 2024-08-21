
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
	button.addEventListener('click', () => {
		const {productId} = button.dataset;
    const productQuantitySelector = '#Quantity-product-' + productId;
    const productCardAdded = document.querySelector('.js-added-to-cart-' + productId);
    const productQuantityValue = parseInt(document.querySelector(productQuantitySelector).value);
    console.log(productQuantityValue)
		let matchingItem;
		cart.forEach((item) => {
			if (productId === item.productId) {
					matchingItem = item;
				}
		});

		if(matchingItem) {
      matchingItem.quantity += productQuantityValue;
		} else {
			cart.push({
				productId,
        quantity: productQuantityValue,
			});
		}
		let cartQuantity = 0;
		cart.forEach((item) => {
			cartQuantity += item.quantity;
		});
		document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    productCardAdded.classList.add('loading');
    if (this.timeoutID){
      clearTimeout(this.timeoutID);
    }
    this.timeoutID = setTimeout(() => {
      
      productCardAdded.classList.remove('loading');

    },2000);
    


    
	})
})
function removeLoading(){
  const addedToCardElem = document.querySelectorAll('.added-to-cart');
  addedToCardElem.forEach((item) => {
    item.classList.remove('loading')
  })
}
function intervalID () {
  let i = 0;
  console.log(i)
}
// Define the class for your custom element
class ProductQuantity extends HTMLElement {
  constructor() {
    super(); // Always call super() first in the constructor.
    this.inputQuantity = this.querySelector('.js-quantity-input');
    this.decreaseButton = this.querySelector('.js-quantity-decrease-button');
    this.increaseButton = this.querySelector('.js-quantity-increase-button')
    this.init();
  }

  init() {
    this.increaseValue();
    this.decreaseValue();
  }
  increaseValue() {
    this.increaseButton.addEventListener('click', () => {
      this.inputQuantity.stepUp();
      console.log('donny')
    })
  }
  decreaseValue() {
    if (this.inputQuantity.value <= 1){
      this.decreaseButton.classList.add('disabled');
    } else {
      this.decreaseButton.classList.remove('disabled');
    }

    this.decreaseButton.addEventListener('click', () => {
      if (this.inputQuantity.value > 1) {
        this.inputQuantity.stepDown();
      }  
    })
  }
  
  connectedCallback() {
  
  }

  disconnectedCallback() {
  
  }

  
}

// Define the custom element, associating it with a tag name
customElements.define('product-quantity', ProductQuantity);
