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
let cardList=document.getElementById("card-list")
let product1=[]
let inType=[]
for (let i=0;i<product.length;i++)
    if (product[i].type=='Vietnamobile'){
        inType.push(i)
        product1.push(product[i])
    }
for (let i=0;i<product1.length;i++){
    var imgName=product1[i].name.replace(' ','')
    if (product1[i].realValue!=product1[i].cost)
        cardList.innerHTML += `
            <div class="col-lg-3 m-5">
            <div class="card">
                <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                    <img class="card-img-top" src="./asset/image/${imgName}.png" alt="Card image">
                </button>
                <div class="card-body" >
                    <h4 class="card-title">${product1[i].name} <i class="ri-fire-fill text-danger" style="float:right" ></i></h4>
                    <p class="card-text" style="text-decoration-line: line-through"> ${product1[i].realValue}</p>
                    <h5 class="card-title text-danger reduce-cost">${product1[i].cost}</h5>
                    <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                    <a class="btn btn-danger text-light" style="float:right"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
                </div>
            </div>
            </div>      
        `
    else
        cardList.innerHTML += `
                <div class="col-lg-3 m-5">
                <div class="card">
                    <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                        <img class="card-img-top" src="./asset/image/${imgName}.png" alt="Card image">
                    </button>
                    <div class="card-body" >
                        <h4 class="card-title" style="min-height:70px;">${product1[i].name}</h4>
                        <h5 class="card-title text-danger reduce-cost">${product1[i].cost}</h5>
                        <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                        <a class="btn btn-danger text-light" style="float:right"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
                    </div>
                </div>
                </div>      
            `
}


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
    document.getElementById("modal-name").innerText=product1[i].name
    document.getElementById("modal-text").innerHTML='Mệnh giá: '+product1[i].realValue+'<br/>'+'Loại thẻ: '+product[i].type+'<br/>'+'Giá: '+product[i].cost;  
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
