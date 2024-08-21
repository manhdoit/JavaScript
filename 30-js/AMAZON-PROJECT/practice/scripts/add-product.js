let productsHTML = ''

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
           $${(product.priceCents / 100).toFixed(2)}
          </div>

          <product-quantity class="product-quantity-container js-product-quantity" data-product-id="${product.id}">
            <button class="quantity-button-decrease js-quantity-decrease-button">-</button>
              <input id="Quantity-product-${product.id}" class="quantity-input js-quantity-input" type="number" value="1" name="quantity" min="1">
            <button class="quantity-button-increase js-quantity-increase-button">+</button>
          </product-quantity>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
					data-product-name="${product.name}"
					data-product-id="${product.id}"
					>
            Add to Cart
          </button>
        </div>
	`;
});

const productGrid = document.querySelector('.js-product-grid');
productGrid.innerHTML = productsHTML;

