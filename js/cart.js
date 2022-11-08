// header
let headerLogin=document.querySelector('.header-login')
let headerUser=document.querySelector('.header-user-name')
let headerLogout=document.querySelector('.header-log-out')
let name1=localStorage.getItem('username1')
let status1=localStorage.getItem('status')
// btnModals:đếm số sản phẩm
let btnModals=document.querySelectorAll(".btn-modal")
if (status1==1){
    localStorage.setItem('numberCart',0)
    headerLogin.classList.add('disappear')
    headerUser.classList.remove('disappear')
    headerLogout.classList.remove('disappear')
    headerUser.innerHTML=`<a class="nav-link me-lg-3" href=""><i class="ti-user"></i>${name1}</a>`
}
headerLogout.addEventListener('click',function(){
    localStorage.setItem('status',0)
    headerLogin.classList.remove('disappear')
    headerUser.classList.add('disappear')
    headerLogout.classList.add('disappear')
})




let numberCart=localStorage.getItem('numberCart1')
document.querySelector('.cart span').innerText = numberCart;

// Giỏ hàng
let productTotal = document.querySelector(".total-price");
let productContainer = document.querySelector(".products");
let json=localStorage.getItem('product')
let cart=JSON.parse(json)
let sum=0
for (let i=0;i<cart.length;i++){
    if (cart[i].inCart!=0){
        var temp=parseInt(cart[i].inCart)*parseInt(cart[i].cost)
        sum=sum+temp
        productContainer.innerHTML += `
        <div class="product products-container">
            <div class="products-header">
                <span class="product-title">${cart[i].name}</span>
                <span class="price" style="margin-left:20px;min-width:100px">${cart[i].cost}</span>
                <span class="quantity" style="margin-left:30px;">${cart[i].inCart}</span>
                <span class="total">${temp}.000<span>
            </div>
            `
    } 
}
productTotal.innerHTML+=`
            <span>${sum}.000đ<span>
        `
// let carts = document.querySelectorAll('.add-cart');
// let products=[
//     {
//         name:'VinaPhone 200k',
//         tag:'VinaPhone200',
//         price:194800,
//         inCart:0

//     },
//     {
//         name:'Viettel 100k',
//         tag:'Viettel100',
//         price:97500,
//         inCart:0

//     },
//     {
//         name:'Vietnamobile 50k',
//         tag:'Vietnamobile50',
//         price:47300,
//         inCart:0

//     },
//     {
//         name:'Mobifone 500k',
//         tag:'Mobifone500',
//         price:487000,
//         inCart:0

//     },
// ]

// for (let i = 0; i < carts.length; i++) {
//     carts[i].addEventListener('click',()=>{
//         cartNumbers(products[i]);
//         totalCost(products[i])
//     })
// }

// function onLoadCarNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers');

//     if (productNumbers) {
//         document.querySelector('.cart span').textContent = productNumbers;
//     }
// }

// function cartNumbers(product) {

//     let productNumbers = localStorage.getItem('cartNumbers');
//     // console.log(productNumbers);

//     productNumbers = parseInt(productNumbers);

//     if (productNumbers) {
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.querySelector('.cart span').textContent = productNumbers + 1;
//     } else{
//         localStorage.setItem('cartNumbers', 1);
//         document.querySelector('.cart span').textContent = 1;
//     }

//     setItem(product);
// }

// function setItem(product) {
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);

//     if (cartItems != null) {
//         if (cartItems[product.tag] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 [product.tag]: product
//             }
//         }
//         cartItems[product.tag].inCart += 1;
//     } else {
//         product.inCart = 1;
//         cartItems = {
//             [product.tag]: product
//         }
//     }


//     localStorage.setItem("productsInCart", JSON.stringify(cartItems));
// }

// function totalCost(product) {
//     let cartCost = localStorage.getItem('totalCost');
//     console.log("My cartCost is", cartCost);
//     console.log(typeof cartCost);
//     if (cartCost != null) {
//         cartCost = parseInt(cartCost);
//         localStorage.setItem("totalCost", cartCost+ product.price)
//     } else {
//         localStorage.setItem("totalCost", product.price);
//     }
// }
// function displayCart(){
//     let cartItems = localStorage.getItem("productsInCart");
//     cartItems = JSON.parse(cartItems);
//     let productContainer = document.querySelector(".products");
//     console.log(cartItems);
//     if (cartItems && productContainer ) {
//         productContainer.innerHTML = '';
//         Object.values(cartItems).map(item => {
//             productContainer.innerHTML += `
//             <div class="product">
//                 <i class="ri-close-circle-fill"></i>
//                 <img src="./asset/image/${item.tag}.png">
//                 <span>${item.name}</span>
//             </div>
//             `
//         });
//     }
// }

// onLoadCarNumbers();
// displayCart();