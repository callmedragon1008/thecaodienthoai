let countOrder=localStorage.getItem('countOrder')
let json
if (countOrder==null)
    countOrder=5
    localStorage.setItem('countOrder',5)

let order=[{
    productCost: "50000",
    productInCart: 3,
    productName: "Viettel 50.000",
    productType: "Viettel"
    }
    ,{
    productCost: "10000",
    productInCart: 6,
    productName: "Vietnamobile 10.000",
    productType: "Vietnamobile"}
    ,{
    productCost: "200000",
    productInCart: 4,
    productName: "Vinaphone 200.000",
    productType: "Vinaphone"}
    ,{
    productCost: "50000",
    productInCart: 3,
    productName: "Mobifone 50.000",
    productType: "Mobifone"}
]

let countCustomer=localStorage.getItem('countCustomer')
if (countCustomer==null){
    countCustomer='6'
    localStorage.setItem('countCustomer',6)
}
let customerList=[
    {
        username:'Dat123',
        email:'data123@gmail.com',
        password:'1238945',
    },
    {
        username:'Dat123',
        email:'Long123@gmail.com',
        password:'1289546',
    },
    {
        username:'Dat12395',
        email:'nguyenRamy@gmail.com',
        password:'1839456',
    },
    {   
        username:'chan',
        email:'daylagmail@gmail.com',
        password:'1256765',
    },{
        username:'uwurwr',
        email:'data@gmail.com',
        password:'12e8546',
    },
    {
        username:'85934',
        email:'kinf24@gmail.com',
        password:'64396',
    }
]
json=JSON.stringify(customerList)
localStorage.setItem('customerList',json)
let telephoneList=['014232231','035353232','09349294','038493443','093447234','093447234']
json=JSON.stringify(telephoneList)
localStorage.setItem('telephoneList',json)
// Danh sách sản phẩm
let numberCart=0
let product=[]
let string1=''
let string2=''
let t=0
if (localStorage.getItem('numberCart1')!=null)
    numberCart=localStorage.getItem('numberCart1')
else   
    localStorage.setItem('numberCart1',0)
document.querySelector('.cart span').innerText = numberCart;
product=[
    {name: 'Viettel 10.000', type: 'Viettel', realValue: '10000', cost: '10000', inCart: 0},
    {name: 'Viettel 20.000', type: 'Viettel', realValue: '20000', cost: '18000', inCart: 0},
    {name: 'Viettel 50.000', type: 'Viettel', realValue: '50000', cost: '50000', inCart: 0},
    {name: 'Viettel 100.000', type: 'Viettel', realValue: '100000', cost: '97500', inCart: 0},
    {name: 'Viettel 200.000', type: 'Viettel', realValue: '200000', cost: '197500', inCart: 0},
    {name: 'Viettel 500.000', type: 'Viettel', realValue: '500000', cost: '497500', inCart: 0},
    {name: 'Vietnamobile 10.000', type: 'Vietnamobile', realValue: '10000', cost: '10000', inCart: 0},
    {name: 'Vietnamobile 20.000', type: 'Vietnamobile', realValue: '20000', cost: '20000', inCart: 0},
    {name: 'Vietnamobile 50.000', type: 'Vietnamobile', realValue: '50000', cost: '47300', inCart: 0},
    {name: 'Vietnamobile 100.000', type: 'Vietnamobile', realValue: '100000', cost: '97500', inCart: 0},
    {name: 'Vietnamobile 200.000', type: 'Vietnamobile', realValue: '200000', cost: '197500', inCart: 0},
    {name: 'Vietnamobile 300.000', type: 'Vietnamobile', realValue: '300000', cost: '300000', inCart: 0},    
    {name: 'Vietnamobile 500.000', type: 'Vietnamobile', realValue: '500000', cost: '497500', inCart: 0},
    {name: 'Vinaphone 10.000', type: 'Vinaphone', realValue: '10000', cost: '10000', inCart: 0},
    {name: 'Vinaphone 20.000', type: 'Vinaphone', realValue: '20000', cost: '18000', inCart: 0},
    {name: 'Vinaphone 30.000', type: 'Vinaphone', realValue: '30000', cost: '30000', inCart: 0},
    {name: 'Vinaphone 50.000', type: 'Vinaphone', realValue: '50000', cost: '50000', inCart: 0},
    {name: 'Vinaphone 100.000', type: 'Vinaphone', realValue: '100000', cost: '100000', inCart: 0},
    {name: 'Vinaphone 200.000', type: 'Vinaphone', realValue: '200000', cost: '194800', inCart: 0},
    {name: 'Vinaphone 300.000', type: 'Vinaphone', realValue: '300000', cost: '284800', inCart: 0},
    {name: 'Vinaphone 500.000', type: 'Vinaphone', realValue: '500000', cost: '454800', inCart: 0},
    {name: 'Mobifone 10.000', type: 'Mobifone', realValue: '10000', cost: '10000', inCart: 0},
    {name: 'Mobifone 20.000', type: 'Mobifone', realValue: '20000', cost: '20000', inCart: 0},
    {name: 'Mobifone 30.000', type: 'Mobifone', realValue: '30000', cost: '30000', inCart: 0},
    {name: 'Mobifone 50.000', type: 'Mobifone', realValue: '50000', cost: '49500', inCart: 0},
    {name: 'Mobifone 100.000', type: 'Mobifone', realValue: '100000', cost: '97500', inCart: 0},
    {name: 'Mobifone 200.000', type: 'Mobifone', realValue: '200000', cost: '192500', inCart: 0},
    {name: 'Mobifone 300.000', type: 'Mobifone', realValue: '300000', cost: '287500', inCart: 0},
    {name: 'Mobifone 500.000', type: 'Mobifone', realValue: '500000', cost: '487000', inCart: 0},
]
if (localStorage.getItem('product')==null){
    json=JSON.stringify(product)
    localStorage.setItem('product',json)
}
else{
    json=localStorage.getItem('product')
    product=JSON.parse(json)
}
let imgLink=[]
let temp
for (let i=0;i<product.length;i++){
    temp=product[i].name.replace(' ','')
    temp=temp.replace('.000','k')
    imgLink.push('./asset/image/'+temp+'.png')
}
if (localStorage.getItem('imgLink')==null){
    json=JSON.stringify(imgLink)
    localStorage.setItem('imgLink',json)
}
else{
    json=localStorage.getItem('imgLink')
    imgLink=JSON.parse(json)
}
let countPage=parseInt((product.length-1)/6)+1
let pageNumber=localStorage.getItem('pageNumber')
if (location.pathname=='/index.html'||location.pathname=='/') pageNumber=1
pageNumber=parseInt(pageNumber)
localStorage.setItem('pageNumber',pageNumber)
let cardList=document.getElementById("card-list")
let a=product.length-6*(pageNumber-1);
if (a>6) a=6
for (let i=0;i<a;i++){
    if (product[i+(pageNumber-1)*6].realValue!=product[i+(pageNumber-1)*6].cost){
        cardList.innerHTML += `
            <div class="col-lg-3 m-5">
            <div class="card">
                <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                    <img class="card-img-top" src="${imgLink[i+(pageNumber-1)*6]}" alt="Card image">
                </button>
                <div class="card-body" >
                    <h4 class="card-title">${product[i+(pageNumber-1)*6].name} <i class="ri-fire-fill text-danger" style="float:right" ></i></h4>
                    <p class="card-text" style="text-decoration-line: line-through"> ${parseInt(product[i+(pageNumber-1)*6].realValue).toLocaleString()}đ</p>
                    <h5 class="card-title text-danger reduce-cost">${parseInt(product[i+(pageNumber-1)*6].cost).toLocaleString()}đ</h5>
                    <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                    <a class="btn btn-danger text-light pay-button" style="float:right" data-bs-toggle="modal" data-bs-target="#myModal-pay">Mua ngay</a>
                </div>
            </div>
            </div>      
        `
    }
    else
        cardList.innerHTML += `
                <div class="col-lg-3 m-5">
                <div class="card">
                    <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none; min-width: px" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                        <img class="card-img-top" src="${imgLink[i+(pageNumber-1)*6]}" alt="Card image">
                    </button>
                    <div class="card-body" >
                        <h4 class="card-title" style="min-height:70px;">${product[i+(pageNumber-1)*6].name}</h4>
                        <h5 class="card-title text-danger reduce-cost">${parseInt(product[i+(pageNumber-1)*6].cost).toLocaleString()}đ</h5>
                        <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                        <a class="btn btn-danger text-light pay-button" style="float:right" data-bs-toggle="modal" data-bs-target="#myModal-pay">Mua ngay</a>
                    </div>
                </div>
                </div>      
            `
}

// Phân trang
let pageFooter=document.querySelector(".paging")
if (countPage>1){
    if (pageNumber!=1&&pageNumber!=2) 
        pageFooter.innerHTML+=`<li class="page-item"><a class="page-link page-before" href="./page${pageNumber-1}.html"><i class="ti-angle-left" style="font-size:12px;"></i></a></li>`
    if (pageNumber==2)
        pageFooter.innerHTML+=`<li class="page-item"><a class="page-link page-before" href="./index.html"><i class="ti-angle-left" style="font-size:12px;"></i></a></li>`
    pageFooter.innerHTML+=`<li class="page-item page-index"><a class="page-link" href="./index.html">1</a></li>`
    for (let i=2;i<=countPage;i++)
        pageFooter.innerHTML+=`<li class="page-item page"><a class="page-link" href="./page${i}.html">${i}</a></li>`
    if (pageNumber!=countPage)
        pageFooter.innerHTML+=`<li class="page-item"><a class="page-link page-after" href="./page${pageNumber+1}.html"><i class="ti-angle-right" style="font-size:12px;"></i></a></li>`
}
let pageIndex=document.querySelector('.page-index')
let page=document.querySelectorAll('.page')
let pageBefore=document.querySelector('.page-before')
let pageAfter=document.querySelector('.page-after')
pageIndex.addEventListener('click',function(){
    localStorage.setItem('pageNumber',1)
})

for (let i=0;i<page.length;i++){
    page[i].addEventListener('click',function(){
        localStorage.setItem('pageNumber',i+2)
    })
}
if (pageNumber!=countPage)
    pageAfter.addEventListener('click',function(){
        localStorage.setItem('pageNumber',pageNumber+1)
    })
if (pageNumber!=1)  
    pageBefore.addEventListener('click',function(){
        localStorage.setItem('pageNumber',pageNumber-1)
    })

// let headerLogo=document.querySelector('.header-logo')
// headerLogo.addEventListener('click',function(){
//     localStorage.setItem('pageNumber',1)
// })
// modal
let btnModals=document.querySelectorAll(".btn-modal")
let carts = document.querySelectorAll('.add-cart')
let headerLogin=document.querySelector('.header-login')
let headerUser=document.querySelector('.header-user-name')
let headerLogout=document.querySelector('.header-log-out')
let name1=localStorage.getItem('username1')
let status1=localStorage.getItem('status')

for (let i=0;i<btnModals.length;i++){
  btnModals[i].addEventListener('click',function(){
    document.getElementById("modal-name").innerText=product[i+(pageNumber-1)*6].name
    document.getElementById("modal-text").innerHTML='Mệnh giá: '+parseInt(product[i+(pageNumber-1)*6].realValue).toLocaleString()+'đ<br/>'+'Loại thẻ: '+product[i+(pageNumber-1)*6].type+'<br/>'+'Giá: '+parseInt(product[i+(pageNumber-1)*6].cost).toLocaleString()+"đ";  
    var btnCart=document.querySelector('.btn-cart')
    btnCart.addEventListener('click',function(){
        product[i+(pageNumber-1)*6].inCart++;
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
})
}
// header,login
if (status1==1){
    headerLogin.classList.add('disappear')
    headerUser.classList.remove('disappear')
    headerLogout.classList.remove('disappear')
    headerUser.innerHTML=`<a class="nav-link me-lg-3" href=""><i class="ti-user"></i>${name1}</a>`
}

// Thêm sản phẩm vào giỏ hàng
for (let i = 0; i < btnModals.length; i++) {
    carts[i].addEventListener('click',()=>{
        product[i+(pageNumber-1)*6].inCart++;
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

// Nút mua ngay

let telephone=document.getElementById('telephone-input')
let customer=[]
let payBtn=document.querySelectorAll('.pay-button')
let payModal=document.getElementById('myModal-pay')
for (let i=0;i < payBtn.length;i++){
    payModal.classList.remove('disappear')
    payBtn[i].addEventListener('click',function(){
        var confirmBtn=document.querySelector('.confirm-button')
        confirmBtn.addEventListener('click',function(){
            var orderID=localStorage.getItem('countOrder')
            if (orderID==null) orderID=1
            else orderID=JSON.parse(orderID)+1
            if (status1!=1)
                alert('Vui lòng đăng nhập để thanh toán')
            else{
                if (telephone.value==''||telephone.value.length<7||telephone.value.indexOf('0')!=0)
                    alert('Vui lòng nhập số điện thoại hợp lệ')
                else{
                    json=JSON.stringify(orderID)
                    localStorage.setItem('countOrder',json)
                    order.push({
                        id:i+(pageNumber-1)*6,
                        productName:product[i+(pageNumber-1)*6].name,
                        productType:product[i+(pageNumber-1)*6].type,
                        productCost:product[i+(pageNumber-1)*6].cost,
                        productInCart:1,
                    })
                    json=JSON.stringify(order)
                    localStorage.setItem('order'+orderID,json)
                    localStorage.setItem('telephone'+orderID,telephone.value)
                    localStorage.setItem('customer'+orderID,name1)
                    alert('Đơn hàng đang được xử lý')
                    window.location.href="index.html"
                }
            }
    })
})
}


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

// search

let btnSearch=document.querySelector("#search-icon")
btnSearch.addEventListener('click',function(){
    var e = document.getElementById("select-bottom")
    var select = e.options[e.selectedIndex].innerText
    var searchInput=document.getElementById("search-input")
    var searchInputText=searchInput.value
    if (searchInputText==''){
        if (select!='Danh mục')
            window.location.href=select+".html"
        else
            window.location.href="index.html"
    }
    else{
        localStorage.setItem('select',select)
        localStorage.setItem('searchInputText',searchInputText)
        window.location.href="search.html"
    }   
})


// Mua ngay






// Thanh toán

// let confirmBtn=document.querySelector('.confirm-button')
// let telephone=document.getElementById('telephone-input')
// let order=[]
// let customer=[]
// let orderID=localStorage.getItem('orderId')
// if (orderID==null) orderID=1
// confirmBtn.addEventListener('click',function(){
//     if (status1!=1)
//         alert('Vui lòngăng nhậpể thanh toán')
//     else{
//         if (telephone.value=='')
//             alert('Vui lòng nhập sốiện thoại')
//         else{
//             for (let i=0;i<cart.length;i++)
//                 if (cart[i].inCart!=0){
//                     order.push({
//                         id:i,
//                         productName:cart[i].name,
//                         productType:cart[i].type,
//                         productRealValue:cart[i].replace,
//                         productCost:cart[i].cost,
//                         productInCart:cart[i].inCart,
//                     })
//                     cart[i].inCart=0
//                 }
//             json=JSON.stringify(cart)
//             localStorage.setItem('product',json)
//             localStorage.setItem('numberCart1',0)
//             json=JSON.stringify(order)
//             localStorage.setItem('order'+orderID,json)
//             localStorage.setItem('telephone'+orderID,telephone.value)
//             localStorage.setItem('customer'+orderID,name1)
//             alert('Đơn hàngangược xác minh')
//             window.location.href="shopping-cart.html"
//         }
//     }
// })