let carts = document.querySelectorAll('.add-cart');

let products=[
    {
        name:'VinaPhone 200k',
        tag:'VinaPhone200',
        price:194800,
        inCart:0

    },
    {
        name:'Viettel 100k',
        tag:'Viettel100',
        price:97500,
        inCart:0

    },
    {
        name:'Vietnamobile 50k',
        tag:'Vietnamobile50',
        price:47300,
        inCart:0

    },
    {
        name:'Mobifone 500k',
        tag:'Mobifone500',
        price:487000,
        inCart:0

    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCarNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');
    // console.log(productNumbers);

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItem(product);
}

function setItem(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost+ product.price)
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    console.log(cartItems);
    if (cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <i class="ri-close-circle-fill"></i>
                <img src="./asset/image/${item.tag}.png">
                <span>${item.name}</span>
            </div>
            `
        });
    }
}

onLoadCarNumbers();
displayCart();