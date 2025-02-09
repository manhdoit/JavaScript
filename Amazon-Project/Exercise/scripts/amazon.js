import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import { formatCurrency } from './utils/money.js';
let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${formatCurrency(product.priceCents)}
      </div>

      <div class="product-quantity-container">
        <input type="number" class="js-product-quantity-${product.id}" value="1">
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>
      <div class="product-add-to-cart-container">
        <div class="product-add-to-cart-message js-product-add-to-cart-message-${product.id}">Added</div>
        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
    </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;




const addToCartMessage = (productId) => {
  const addtoCartMessage = document.querySelector(`.js-product-add-to-cart-message-${productId}`);

  addtoCartMessage.classList.add('show');
  setTimeout(() => {
    addtoCartMessage.classList.remove('show');
  }, 2000);
};

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      
      const productId = button.dataset.productId;
      const productQuantity = Number(document.querySelector(`.js-product-quantity-${productId}`).value);
      if (productQuantity < 1) {
        return;
      }
      addToCart(productId);
      addToCartMessage(productId);

    });
  });