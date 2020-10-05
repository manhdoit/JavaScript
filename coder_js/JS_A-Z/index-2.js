var calculatorArea = {
    Triangle: function(canhday, chieucao) {
        s = canhday * chieucao / 2
        console.log('s Tam Giac: ', s)
        return s
    },
    Circle: function(r) {
        s = r * r * 3.14;
        console.log('s Hinh tron: ', s)
        return s
    },
    Square: function(a) {
        s = a * a;
        console.log('s hinh vuong: ', s)
        return s
    },
    Rectangle: function(a, b) {
        s = a * b;
        console.log('s hinh chu nhat: ', s)
        return s;
    },
    Rhombus: function(d1, d2) {
        s = (d1 * d2) / 2
        console.log('s hinh thoi', s);
        return s
    }
}
calculatorArea.Triangle(20, 22);
calculatorArea.Circle(20);
calculatorArea.Square(20);
calculatorArea.Rectangle(66, 88);
calculatorArea.Rhombus(68, 86);






var rectangles = [{
        width: 6,
        height: 8
    },
    {
        width: 66,
        height: 88
    },
    {
        width: 68,
        height: 86
    },
    {
        width: 686,
        height: 868
    },
    {
        width: 68686,
        height: 86868
    }
]
var sRectangles = rectangles.map(function(e, index) {

        return `Dien tich hinh chu nhat ${index}: ${e.width * e.height}`;
    })
    // console.log(sRectangles)


var circle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

var circleListArea = circle.map(function(item, index) {
        s = item * item * 3.14;
        return s;
    })
    // console.log(circleListArea);
var listCircle = ''
var circleDisplay = document.getElementById('circleDisplay');
for (i = 0; i < circleListArea.length; i++) {
    listCircle += `<li  class="list-item"
                    style="width: ${circleListArea[i]}px; 
                    height: ${circleListArea[i]}px;
                    font-size:${Math.floor(circleListArea[i] / 20)}em;"
                    ><span class="top-right"></span>
                    <span class="bottom-right"></span>
                    <span class="bottom-left"></span>
                    <span class="top-left"></span>
                </li>`
}
circleDisplay.innerHTML = listCircle;







===
===
===
===
===
===
=== === === ==
var cartObject = {

}
var orders = [{
        product: 'book1',
        quantity: 1,
        unitPrice: 100,
        coupon: 10
    },
    {
        product: 'book2',
        quantity: 2,
        unitPrice: 150,
        coupon: 10
    },
    {
        product: 'book3',
        quantity: 4,
        unitPrice: 200,
        coupon: 5
    },
    {
        product: 'book4',
        quantity: 15,
        unitPrice: 250,
        coupon: 6
    },
    {
        product: 'book5',
        quantity: 11,
        unitPrice: 300
    }
]

const newOrder = orders.map(function(orderItem) {
    const totalOrderItem = orderItem.quantity * orderItem.unitPrice
    const discount = orderItem.coupon / 100
    if (!orderItem.coupon) {
        return (totalOrderItem)
    }
    return totalOrderItem - (totalOrderItem * discount)
})
const totalOrder = newOrder.reduce(function(currentPrice, totalPrice) {
    return (currentPrice + totalPrice);
})

function cartItem() {
    cartList = ''
    for (i = 0; i < orders.length; i++) {
        cartList += `<li>
        <div class='product-name'>Tên sản phẩm: <span>${orders[i].product}<span></div>
        <div class='product-quantity'>Số lượng: <span>${orders[i].quantity}<span></div>
        <div class='product-price'>Giá: <span>${orders[i].unitPrice}<span></div>
        <div class='discount'>Discount : <span>${orders[i].coupon ? orders[i].coupon +'%' : ''}<span></div>
        </li>`
    }
    return cartList;
}

function createCartElem() {
    const root = document.getElementById('root');
    const newCart = document.createElement('ul');
    newCart.setAttribute('id', 'cartWrap')
    root.appendChild(newCart)
    newCart.innerHTML = cartItem() + 'Cart Total: ' + totalOrder;
}
createCartElem()





===
===
===
===
===
=== === === === === === === ==
var orders = [{
        product: 'book1',
        quantity: 1,
        unitPrice: 100,
        coupon: 10
    },
    {
        product: 'book2',
        quantity: 2,
        unitPrice: 150,
        coupon: 10
    },
    {
        product: 'book3',
        quantity: 4,
        unitPrice: 200,
        coupon: 5
    },
    {
        product: 'book4',
        quantity: 15,
        unitPrice: 250,
        coupon: 6
    },
    {
        product: 'book5',
        quantity: 11,
        unitPrice: 300
    },

]


const newOrder = orders.map(function(orderItem) {
    const totalOrderItem = orderItem.quantity * orderItem.unitPrice
    const discount = orderItem.coupon / 100
    if (!orderItem.coupon) {
        return (totalOrderItem)
    }
    return totalOrderItem - (totalOrderItem * discount)
})
const totalOrder = newOrder.reduce(function(currentPrice, totalPrice) {
    return (currentPrice + totalPrice);
})

function sumItemPrice(item) {
    const totalOrderItem = item.quantity * item.unitPrice
    const discount = item.coupon / 100
    if (item.coupon) {
        return totalOrderItem - (totalOrderItem * discount)
    } else {
        return totalOrderItem;
    }
}

function cartItem(items) {
    var cartList = items.map(function(item) {
        return `<li> 
    <span>${item.product}</span>
    <span>${item.quantity}</span>
    <span>${item.unitPrice}</span>
    <span>${item.coupon ? item.coupon : ''}</span>
    <span>${sumItemPrice(item)}</span>
    </li>`
    })
    return cartList.join('');
}

function createCartElem() {
    const cartListTitle = `<li>
<span>Tên sản phẩm</span>
<span>Số lượng</span>
<span>Đơn giá</span>
<span>Discount</span>
<span>Thành tiền</span>
</li>`
    const root = document.getElementById('root');
    const newCart = document.createElement('ul');
    newCart.setAttribute('id', 'cartWrap')
    root.appendChild(newCart)
    newCart.innerHTML = cartListTitle + cartItem(orders) + '<li class="cart-footer">Cart Total: <span class="total-price">' + totalOrder + '</span></li>';
}
createCartElem()









===
=== === === === === === === === === === === ==
var users = [{
        name: 'Nu',
        gender: 'female'
    },
    {
        name: 'Name2',
        gender: 'male'
    },
    {
        name: 'Nu12',
        gender: 'female'
    },
    {
        name: 'Name14',
        gender: 'male'
    },
    {
        name: 'Name1',
        gender: 'male5'
    },
    {
        name: 'Nu1221',
        gender: 'female'
    },
    {
        name: 'Nu12312312',
        gender: 'female'
    }
]
var userList = document.getElementById('userList')
var genderFilter = document.getElementById('genderFilter');

render(userList, users);

genderFilter.addEventListener('change', (event) => {
    var selectedGender = event.target.value
    var filteredUsers = users.filter((user) => {
        return user.gender === selectedGender
    })
    if (selectedGender != 'null') {
        render(userList, filteredUsers);
    } else {
        render(userList, users)
    }
})

function render(container, items) {
    var htmlItems = items.map((item) => {
        return '<li class="list-group-item">' + item.name + '</li>';
    })
    var html = htmlItems.join('');
    container.innerHTML = html
}

render(userList, users)

<body>
    <!--[if lt IE 7]>
			<p class="browsehappy">
				You are using an <strong>outdated</strong> browser. Please
				<a href="#">upgrade your browser</a> to improve your experience.
			</p>
		<![endif]-->
    <div id="root">
        <div class="row">
            <div class="col form-group">
                <label for="genderFilter">Gender</label>
                <select name="" id="genderFilter" class="form-control">
						<option value="null">All</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
            </div>
            <ul class="list-group" id="userList"></ul>
        </div>
    </div>
    <script src="index.js" defer></script>
    <script src="" async defer></script>
</body>