// modal
let btnModals=document.querySelectorAll(".btn-modal")
let cardName=document.getElementsByClassName("card-title")
let cost=document.getElementsByClassName("card-text")
let reduceCost=document.getElementsByClassName("reduce-cost")
let type=[]
let string=""
let carts = document.querySelectorAll('.add-cart');
let inCart=[]
let productName=[]
let productCost=[]
let numberCart
let product=[]
let string1=''
let string2=''
let t=0
let productFromStorage=localStorage.getItem('product')
let productFromStorage1=JSON.parse(productFromStorage)
let headerLogin=document.querySelector('.header-login')
let headerUser=document.querySelector('.header-user-name')
let headerLogout=document.querySelector('.header-log-out')
let name1=localStorage.getItem('username1')
let status1=localStorage.getItem('status')
for (let i=0;i<btnModals.length;i++){
  string=cardName[2*i].innerText;
  type.push(string.slice(0,string.search(" ")))
}
// console.log(btnModals.length)
for (let i=0;i<btnModals.length;i++){
  btnModals[i].addEventListener('click',function(){
    document.getElementById("modal-text").innerHTML='Mệnh giá: '+cost[i].innerText+'<br/>'+'Loại thẻ: '+type[i]+'<br/>'+'Giá: '+reduceCost[i].innerText;  
  })
}
// header,login
if (status1==1){
    headerLogin.classList.add('disappear')
    headerUser.classList.remove('disappear')
    headerLogout.classList.remove('disappear')
    headerUser.innerHTML=`<a class="nav-link me-lg-3" href=""><i class="ti-user"></i>${name1}</a>`
}


// shopping cart


if (localStorage.getItem('numberCart1')!=undefined){
    numberCart=localStorage.getItem('numberCart1')
    document.querySelector('.cart span').innerText = numberCart;
}
for (let i=0;i<btnModals.length;i++){
    string1=cardName[2*i].innerText
    string2=reduceCost[i].innerText
    product.push({
        name:string1,
        type:type[i],
        cost:string2,
        inCart:0
    })
}

if (productFromStorage1!=null)
for (let i=0;i<btnModals.length;i++){
    if (productFromStorage1[i].inCart!=0)
        product[i].inCart=productFromStorage1[i].inCart;
}
for (let i = 0; i < btnModals.length; i++) {
    carts[i].addEventListener('click',()=>{
    product[i].inCart++;
    var json=JSON.stringify(product)
    localStorage.setItem('product',json)
    if (document.querySelector('.cart span').textContent=='0') 
        numberCart=1
    else{
    numberCart++;
    localStorage.setItem('numberCart1',numberCart)
}
    document.querySelector('.cart span').innerText = numberCart;
})
}
numberCart=localStorage.getItem('numberCart1')
document.querySelector('.cart span').innerText = numberCart;


headerLogout.addEventListener('click',function(){
    localStorage.setItem('status',0)
    localStorage.setItem('numberCart1',0)
    for (let i=0;i<btnModals.length;i++){
        product[i].inCart=0
    }
    var json=JSON.stringify(product)
    localStorage.setItem('product',json)
    headerLogin.classList.remove('disappear')
    headerUser.classList.add('disappear')
    headerLogout.classList.add('disappear')
})
// localStorage.setItem('cardName',cardName)
// localStorage.setItem('reduceCost',reduceCost)
// let test=localStorage.getItem('cardName')
// let numberCart1=localStorage.getItem('numberCart1')
// document.querySelector('.cart span').innerText = numberCart1;

// let productNumbers = localStorage.getItem('cartNumbers');
// for (let i=0;i<btnModals.length;i++)
//   if (inCart[i]!=0) 
//   productContainer.innerHTML += `
//             <div class="product">
//                 <span>${cardName[i].innerText}</span>
//             </div>
//             `

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