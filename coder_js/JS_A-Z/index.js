var arrayOfProducts = [{
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "CHECK PRINT SHIRT",
        "price": 110,
        "quantity": 100,
        "category": 'Tissot'
    },
    {
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "GLORIA HIGH LOGO SNEAKER",
        "price": 91,
        "quantity": 310,
        "category": 'Casio'
    },
    {
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "CATE RIGID BAG",
        "price": 94.5,
        "quantity": 3103,
        "category": 'Rolex'
    },
    {
        "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "GUESS CONNECT WATCH",
        "price": 438.9,
        "quantity": 310112,
        "category": 'Tissot'
    },
    {
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "'70s RETRO GLAM KEFIAH",
        "price": 20,
        "quantity": 31012,
        "category": 'Rolex'
    },
    {
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "CATE RIGID BAG",
        "price": 94.5,
        "quantity": 3103,
        "category": 'Samsung'
    },
    {
        "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "GUESS CONNECT WATCH",
        "price": 438.9,
        "quantity": 310112,
        "category": 'Nokia'
    },
    {
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "'70s RETRO GLAM KEFIAH",
        "price": 20,
        "quantity": 31012,
        "category": 'Tag heuer'
    }
]
var productContainer = document.getElementById('productListWrap');
var header = document.getElementById('header');

function renderProduct(container, items) {
    let productItems = items.map((item) => {
        return `
    <li class="product-item">
    <div class="product-image"> <img src="${item.imgUrl}" alt="${item.name}"/></div>
    <h3 class="product-name">${item.name}</h3>
    <span class="product-quantity">${item.quantity}</span>
    <span class="product-price">${item.price} $ </span>
    </li>`
    })
    let html = productItems.join('');
    container.innerHTML = `<li class="product-item">
<div class="product-image">Ảnh</div>
<h3 class="product-name">Tên</h3>
<span class="product-quantity">Số lượng</span>
<span class="product-price">Giá tiền</span>
</li>` + html;
}

renderProduct(productContainer, arrayOfProducts)

function renderFilterList(list) {
    let content = ''
    const categoryList = []
    const listContainer = document.createElement('select')
    const label = document.createElement('label')
    label.innerText = 'Filter'
    listContainer.setAttribute('class', 'selectForm')
    listContainer.setAttribute('id', 'productFilter')
    header.append(label)
    header.append(listContainer)

    for (item of list) {
        categoryList.push(item.category);
    }
    const sortList = [...new Set(categoryList)];
    for (item in sortList) {
        content += `<option value = "${sortList[item]}" >${sortList[item]}</option>`
    }
    listContainer.innerHTML = '<option value="All">All</option> ' + content;
}
renderFilterList(arrayOfProducts)

var productFilter = document.getElementById('productFilter');
productFilter.addEventListener('change', (event) => {
    var selectedProduct = event.target.value
    var filteredProduct = arrayOfProducts.filter((item) => {
        return item.category === selectedProduct
    })
    if (selectedProduct != 'All') {
        renderProduct(productContainer, filteredProduct)
        totalProductsPrice(filteredProduct)
    } else {
        renderProduct(productContainer, arrayOfProducts)
        totalProductsPrice(arrayOfProducts)
    }
})

function totalProductsPrice(list) {
    let totalProductPrice = list.map((item) => {
        return item.price * item.quantity;
    })
    let totalPrice = totalProductPrice.reduce((currentPrice, totalPrice) => {
        return (currentPrice + totalPrice);
    })
    var totalEl = document.getElementById('totalPrice');

    var formatMoney = new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(totalPrice);
    totalEl.innerHTML = 'Tổng tiền Hàng: ' + formatMoney;
}
totalProductsPrice(arrayOfProducts)