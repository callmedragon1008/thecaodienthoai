// Danh sách sản phẩm tìm kiếm

let json=localStorage.getItem('product')
product=JSON.parse(json)
let select=localStorage.getItem('select')
let searchInputText=localStorage.getItem('searchInputText')
let productList=document.getElementById("product-list")
let searchInput1=document.getElementById('search-input-display')
let product1=[]
let inCart=[]
let temp=0
if (select!='Danh mục'){
    searchInput1.innerText+="   "+searchInputText+','+select
    for (let i=0;i<product.length;i++){
    var imgName=product[i].name.replace(' ','')
    imgName=imgName.replace('.000','k')
    if (product[i].type==select&&(product[i].name.lastIndexOf(searchInputText)!=-1||product[i].realValue.lastIndexOf(searchInputText)!=-1)){
        product1.push(product[i])
        inCart.push(i)
        if (product[i].realValue!=product[i].cost)
            productList.innerHTML += `
                <div class="col-lg-3 m-5">
                <div class="card">
                    <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                        <img class="card-img-top" src="./asset/image/${imgName}.png" alt="Card image">
                    </button>
                    <div class="card-body" >
                        <h4 class="card-title">${product[i].name} <i class="ri-fire-fill text-danger" style="float:right" ></i></h4>
                        <p class="card-text" style="text-decoration-line: line-through"> ${parseInt(product[i].realValue).toLocaleString()}đ</p>
                        <h5 class="card-title text-danger reduce-cost">${(parseInt(product[i].cost)).toLocaleString()}đ</h5>
                        <a class="add-cart push-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                        <a class="btn btn-danger text-light pay-button" style="float:right" data-bs-toggle="modal" data-bs-target="#myModal-pay"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
                    </div>
                </div>
                </div>      
            `
        else
            productList.innerHTML += `
                    <div class="col-lg-3 m-5">
                    <div class="card">
                        <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                            <img class="card-img-top" src="./asset/image/${imgName}.png" alt="Card image">
                        </button>
                        <div class="card-body" >
                            <h4 class="card-title" style="min-height:70px;">${product[i].name}</h4>
                            <h5 class="card-title text-danger reduce-cost">${(parseInt(product[i].cost)).toLocaleString()}đ</h5>
                            <a class="add-cart push-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                            <a class="btn btn-danger text-light pay-button" style="float:right" data-bs-toggle="modal" data-bs-target="#myModal-pay"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
                        </div>
                    </div>
                    </div>      
                `
        temp++;
        if (temp==7) break;
}
    }
}
else{
    searchInput1.innerText+="   "+searchInputText
    for (let i=0;i<product.length;i++){
    var imgName=product[i].name.replace(' ','')
    imgName=imgName.replace('.000','k')
    if ((product[i].name.lastIndexOf(searchInputText)!=-1||product[i].realValue.lastIndexOf(searchInputText)!=-1)){
        product1.push(product[i])
        inCart.push(i)
        temp++;
        if (temp==7) break;
        if (product[i].realValue!=product[i].cost)
            productList.innerHTML += `
                <div class="col-lg-3 m-5">
                <div class="card">
                    <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                        <img class="card-img-top" src="./asset/image/${imgName}.png" alt="Card image">
                    </button>
                    <div class="card-body" >
                        <h4 class="card-title">${product[i].name} <i class="ri-fire-fill text-danger" style="float:right" ></i></h4>
                        <p class="card-text" style="text-decoration-line: line-through"> ${parseInt(product[i].realValue).toLocaleString()}đ</p>
                        <h5 class="card-title text-danger reduce-cost">${(parseInt(product[i].cost)).toLocaleString()}đ</h5>
                        <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                        <a class="btn btn-danger text-light pay-button" style="float:right" data-bs-toggle="modal" data-bs-target="#myModal-pay"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
                    </div>
                </div>
                </div>      
            `
        else
            productList.innerHTML += `
                    <div class="col-lg-3 m-5">
                    <div class="card">
                        <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                            <img class="card-img-top" src="./asset/image/${imgName}.png" alt="Card image">
                        </button>
                        <div class="card-body" >
                            <h4 class="card-title" style="min-height:70px;">${product[i].name}</h4>
                            <h5 class="card-title text-danger reduce-cost">${(parseInt(product[i].cost)).toLocaleString()}đ</h5>
                            <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                            <a class="btn btn-danger text-light pay-button" style="float:right" data-bs-toggle="modal" data-bs-target="#myModal-pay"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
                        </div>
                    </div>
                    </div>      
                `
    }
}
}
if (temp==7){
    document.getElementById('paging').innerHTML=`
    <ul class="pagination">
        <li class="page-item"><a class="page-link page-before" href="./search.html"><i class="ti-angle-left" style="font-size:12px;"></i></a></li>
        <li class="page-item page-index"><a class="page-link" href="./search.html">1</a></li>
        <li class="page-item page-index"><a class="page-link" href="./search.html">2</a></li>
        <li class="page-item page-index"><a class="page-link" href="./search.html">3</a></li>
        <li class="page-item page-index"><a class="page-link" href="./search.html">4</a></li>
        <li class="page-item"><a class="page-link page-before" href="./search.html"><i class="ti-angle-right" style="font-size:12px;"></i></a></li>
    </ul>
    `
}

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
    document.getElementById("modal-name").innerText=product[inCart[i]].name
    document.getElementById("modal-text").innerHTML='Mệnh giá: '+parseInt(product[inCart[i]].realValue).toLocaleString()+'đ<br/>'+'Loại thẻ: '+product[inCart[i]].type+'<br/>'+'Giá: '+parseInt(product[inCart[i]].cost).toLocaleString()+"đ";  
    var btnCart=document.querySelector('.btn-cart')
    btnCart.addEventListener('click',function(){
        console.log(numberCart)
        product[inCart[i]].inCart++;
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

// Nút mua ngay

let telephone=document.getElementById('telephone-input')
let order=[]
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
                if (telephone.value=='')
                    alert('Vui lòng nhập số điện thoại')
                else{
                    json=JSON.stringify(orderID)
                    localStorage.setItem('countOrder',json)
                    order.push({
                        id:inCart[i],
                        productName:product[inCart[i]].name,
                        productType:product[inCart[i]].type,
                        productCost:product[inCart[i]].cost,
                        productInCart:1,
                    })
                    json=JSON.stringify(order)
                    localStorage.setItem('order'+orderID,json)
                    localStorage.setItem('telephone'+orderID,telephone.value)
                    localStorage.setItem('customer'+orderID,name1)
                    alert('Đơn hàng đang được xử lý')
                    window.location.href="search.html"
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


// giỏ hàng
numberCart=localStorage.getItem('numberCart1')

document.querySelector('.cart span').textContent=numberCart
for (let i = 0; i < btnModals.length; i++) {
    carts[i].addEventListener('click',()=>{
        product[inCart[i]].inCart++;
        var json=JSON.stringify(product)
        localStorage.setItem('product',json)
        numberCart++
        document.querySelector('.cart span').textContent=numberCart
        localStorage.setItem('numberCart1',numberCart)
        document.querySelector('.cart span').innerText = numberCart;
})

}


// logout
headerLogout.addEventListener('click',function(){
    localStorage.setItem('status',0)
    localStorage.setItem('numberCart1',0)
    for (let i=0;i<btnModals.length;i++){
        product[i].inCart=0
    }
    var json=JSON.stringify(product)
    localStorage.setItem('product',json)
    headerLogin.classList.remove('disappear')
    headerUser.classList.push('disappear')
    headerLogout.classList.push('disappear')
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
