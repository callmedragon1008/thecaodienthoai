// Hiển thị số sản phẩm trong giỏ hàng
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

// Danh sách sản phẩm

let json=localStorage.getItem('product')
product=JSON.parse(json)
json=localStorage.getItem('imgLink')
let cardList=document.getElementById("card-list")
let product1=[]
let inType=[]
let imgLink=JSON.parse(json)
let type=location.pathname.slice(1,location.pathname.indexOf('.'))
let imgLink1=[]
type=type[0].toUpperCase()+type.slice(1)
for (let i=0;i<product.length;i++)
    if (product[i].type==type){
        inType.push(i)
        product1.push(product[i])
        imgLink1.push(imgLink[i])
    }
// for (let i=0;i<product1.length;i++){
//         temp=product1[i].name.replace(' ','')
//         temp=temp.replace('.000','k')
//         imgLink.push('./asset/image/'+temp+'.png')
//     }
for (let i=0;i<6;i++){
    if (product1[i].realValue!=product1[i].cost)
        cardList.innerHTML += `
            <div class="col-lg-3 m-5">
            <div class="card">
                <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                    <img class="card-img-top" src="${imgLink1[i]}" alt="Card image">
                </button>
                <div class="card-body" >
                    <h4 class="card-title">${product1[i].name} <i class="ri-fire-fill text-danger" style="float:right" ></i></h4>
                    <p class="card-text" style="text-decoration-line: line-through"> ${parseInt(product1[i].realValue).toLocaleString()}đ</p>
                    <h5 class="card-title text-danger reduce-cost">${parseInt(product1[i].cost).toLocaleString()}đ</h5>
                    <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                    <a class="btn btn-danger text-light pay-button" style="float:right" data-bs-toggle="modal" data-bs-target="#myModal-pay">Mua ngay</a>
                </div>
            </div>
            </div>      
        `
    else
        cardList.innerHTML += `
                <div class="col-lg-3 m-5">
                <div class="card">
                    <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                        <img class="card-img-top" src="${imgLink1[i]}" alt="Card image">
                    </button>
                    <div class="card-body" >
                        <h4 class="card-title" style="min-height:70px;">${product1[i].name}</h4>
                        <h5 class="card-title text-danger reduce-cost">${parseInt(product1[i].cost).toLocaleString()}đ</h5>
                        <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                        <a class="btn btn-danger text-light pay-button" style="float:right" data-bs-toggle="modal" data-bs-target="#myModal-pay">Mua ngay</a>
                    </div>
                </div>
                </div>      
            `
}
document.getElementById('paging').innerHTML=`
    <ul class="pagination">
        <li class="page-item"><a class="page-link page-before" href="./${type}.html"><i class="ti-angle-left" style="font-size:12px;"></i></a></li>
        <li class="page-item page-index"><a class="page-link" href="./${type}.html">1</a></li>
        <li class="page-item page-index"><a class="page-link" href="./${type}.html">2</a></li>
        <li class="page-item page-index"><a class="page-link" href="./${type}.html">3</a></li>
        <li class="page-item page-index"><a class="page-link" href="./${type}.html">4</a></li>
        <li class="page-item"><a class="page-link page-before" href="./${type}.html"><i class="ti-angle-right" style="font-size:12px;"></i></a></li>
    </ul>
    `

let headerLogo=document.querySelector('.header-logo')
headerLogo.addEventListener('click',function(){
    localStorage.setItem('pageNumber',1)
})
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
    document.getElementById("modal-name").innerText=product[inType[i]].name
    document.getElementById("modal-text").innerHTML='Mệnh giá: '+parseInt(product[inType[i]].realValue).toLocaleString()+'đ<br/>'+'Loại thẻ: '+product[inType[i]].type+'<br/>'+'Giá: '+parseInt(product[inType[i]].cost).toLocaleString()+'đ';  
    var btnCart=document.querySelector('.btn-cart')
    btnCart.addEventListener('click',function(){
        console.log(numberCart)
        product[inType[i]].inCart++;
        var json=JSON.stringify(product)
        localStorage.setItem('product',json)
        if (document.querySelector('.cart span').textContent=='0') 
            numberCart=1
        else{
        numberCart++;
        localStorage.setItem('numberCart1',numberCart)
        document.querySelector('.cart span').innerText = numberCart;
    }
})

})
}


// Nút mua ngay

let telephone=document.getElementById('telephone-input')
let order=[]
let customer=[]
let payBtn=document.querySelectorAll('.pay-button')
for (let i=0;i < payBtn.length;i++){
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
                        id:inType[i],
                        productName:product[inType[i]].name,
                        productType:product[inType[i]].type,
                        productCost:product[inType[i]].cost,
                        productInCart:1,
                    })
                    json=JSON.stringify(order)
                    localStorage.setItem('order'+orderID,json)
                    localStorage.setItem('telephone'+orderID,telephone.value)
                    localStorage.setItem('customer'+orderID,name1)
                    alert('Đơn hàng đang được xử lý')
                    window.location.href="Mobifone.html"
                }
            }
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
        product[inType[i]].inCart++;
        var json=JSON.stringify(product)
        localStorage.setItem('product',json)
        numberCart++
        document.querySelector('.cart span').textContent=numberCart
        localStorage.setItem('numberCart1',numberCart)
        document.querySelector('.cart span').innerText = numberCart;
})
}

// Logout
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
