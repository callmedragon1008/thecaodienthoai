// Danh sách sản phẩm tìm kiếm

let json=localStorage.getItem('product')
product=JSON.parse(json)
let select=localStorage.getItem('select')
let searchInputText=localStorage.getItem('searchInputText')
let productList=document.getElementById("product-list")
let searchInput1=document.getElementById('search-input')
if (select!='Danh mục'){
    searchInput1.innerText+="   "+searchInputText+','+select
    for (let i=0;i<product.length;i++){
    var imgName=product[i].name.replace(' ','')
    if (product[i].type==select&&(product[i].name.lastIndexOf(searchInputText)||product[i].realValue.lastIndexOf(searchInputText)))
    if (product[i].realValue!=product[i].cost)
        productList.innerHTML += `
            <div class="col-lg-3 m-5">
            <div class="card">
                <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                    <img class="card-img-top" src="./asset/image/${imgName}.png" alt="Card image">
                </button>
                <div class="card-body" >
                    <h4 class="card-title">${product[i].name} <i class="ri-fire-fill text-danger" style="float:right" ></i></h4>
                    <p class="card-text" style="text-decoration-line: line-through"> ${product[i].realValue}</p>
                    <h5 class="card-title text-danger reduce-cost">${product[i].cost}</h5>
                    <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                    <a class="btn btn-danger text-light" style="float:right"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
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
                        <h5 class="card-title text-danger reduce-cost">${product[i].cost}</h5>
                        <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                        <a class="btn btn-danger text-light" style="float:right"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
                    </div>
                </div>
                </div>      
            `
}
    }
else{
    searchInput1.innerText+="   "+searchInputText
    for (let i=0;i<product.length;i++){
    var imgName=product[i].name.replace(' ','')
    if ((product[i].name.lastIndexOf(searchInputText)!=-1||product[i].realValue.lastIndexOf(searchInputText)!=-1))
    if (product[i].realValue!=product[i].cost)
        productList.innerHTML += `
            <div class="col-lg-3 m-5">
            <div class="card">
                <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                    <img class="card-img-top" src="./asset/image/${imgName}.png" alt="Card image">
                </button>
                <div class="card-body" >
                    <h4 class="card-title">${product[i].name} <i class="ri-fire-fill text-danger" style="float:right" ></i></h4>
                    <p class="card-text" style="text-decoration-line: line-through"> ${product[i].realValue}</p>
                    <h5 class="card-title text-danger reduce-cost">${product[i].cost}</h5>
                    <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                    <a class="btn btn-danger text-light" style="float:right"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
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
                        <h5 class="card-title text-danger reduce-cost">${product[i].cost}</h5>
                        <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                        <a class="btn btn-danger text-light" style="float:right"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
                    </div>
                </div>
                </div>      
            `

}
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
    document.getElementById("modal-name").innerText=product[i+(pageNumber-1)*6].name
    document.getElementById("modal-text").innerHTML='Mệnh giá: '+product[i+(pageNumber-1)*6].realValue+'<br/>'+'Loại thẻ: '+product[i+(pageNumber-1)*6].type+'<br/>'+'Giá: '+product[i+(pageNumber-1)*6].cost;  
  })
}
// header,login
if (status1==1){
    headerLogin.classList.add('disappear')
    headerUser.classList.remove('disappear')
    headerLogout.classList.remove('disappear')
    headerUser.innerHTML=`<a class="nav-link me-lg-3" href=""><i class="ti-user"></i>${name1}</a>`
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
