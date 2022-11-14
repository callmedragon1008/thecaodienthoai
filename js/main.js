
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
    {name: 'Viettel 10k', type: 'Viettel', realValue: '10.000 đ', cost: '10.000 đ', inCart: 0},
    {name: 'Viettel 20k', type: 'Viettel', realValue: '20.000 đ', cost: '18.000 đ', inCart: 0},
    {name: 'Viettel 50k', type: 'Viettel', realValue: '50.000 đ', cost: '50.000 đ', inCart: 0},
    {name: 'Viettel 100k', type: 'Viettel', realValue: '100.000 đ', cost: '97.500 đ', inCart: 0},
    {name: 'Viettel 200k', type: 'Viettel', realValue: '200.000 đ', cost: '197.500 đ', inCart: 0},
    {name: 'Viettel 500k', type: 'Viettel', realValue: '500.000 đ', cost: '497.500 đ', inCart: 0},
    {name: 'Vietnamobile 10k', type: 'Vietnamobile', realValue: '10.000 đ', cost: '10.000 đ', inCart: 0},
    {name: 'Vietnamobile 20k', type: 'Vietnamobile', realValue: '20.000 đ', cost: '20.000 đ', inCart: 0},
    {name: 'Vietnamobile 50k', type: 'Vietnamobile', realValue: '50.000 đ', cost: '47.300 đ', inCart: 0},
    {name: 'Vietnamobile 100k', type: 'Vietnamobile', realValue: '100.000 đ', cost: '97.500 đ', inCart: 0},
    {name: 'Vietnamobile 200k', type: 'Vietnamobile', realValue: '200.000 đ', cost: '197.500 đ', inCart: 0},
    {name: 'Vietnamobile 300k', type: 'Vietnamobile', realValue: '300.000 đ', cost: '300.000 đ', inCart: 0},    
    {name: 'Vietnamobile 500k', type: 'Vietnamobile', realValue: '500.000 đ', cost: '497.500 đ', inCart: 0},
    {name: 'Vinaphone 10k', type: 'Vinaphone', realValue: '10.000 đ', cost: '10.000 đ', inCart: 0},
    {name: 'Vinaphone 20k', type: 'Vinaphone', realValue: '20.000 đ', cost: '18.000 đ', inCart: 0},
    {name: 'Vinaphone 30k', type: 'Vinaphone', realValue: '30.000 đ', cost: '30.000 đ', inCart: 0},
    {name: 'Vinaphone 50k', type: 'Vinaphone', realValue: '50.000 đ', cost: '50.000 đ', inCart: 0},
    {name: 'Vinaphone 100k', type: 'Vinaphone', realValue: '100.000 đ', cost: '100.000 đ', inCart: 0},
    {name: 'Vinaphone 200k', type: 'Vinaphone', realValue: '200.000 đ', cost: '194.800 đ', inCart: 0},
    {name: 'Vinaphone 300k', type: 'Vinaphone', realValue: '300.000 đ', cost: '284.800 đ', inCart: 0},
    {name: 'Vinaphone 500k', type: 'Vinaphone', realValue: '500.000 đ', cost: '454.800 đ', inCart: 0},
    {name: 'Mobifone 10k', type: 'Mobifone', realValue: '10.000 đ', cost: '10.000 đ', inCart: 0},
    {name: 'Mobifone 20k', type: 'Mobifone', realValue: '20.000 đ', cost: '20.000 đ', inCart: 0},
    {name: 'Mobifone 30k', type: 'Mobifone', realValue: '30.000 đ', cost: '30.000 đ', inCart: 0},
    {name: 'Mobifone 50k', type: 'Mobifone', realValue: '50.000 đ', cost: '49.500 đ', inCart: 0},
    {name: 'Mobifone 100k', type: 'Mobifone', realValue: '100.000 đ', cost: '97.500 đ', inCart: 0},
    {name: 'Mobifone 200k', type: 'Mobifone', realValue: '200.000 đ', cost: '192.500 đ', inCart: 0},
    {name: 'Mobifone 300k', type: 'Mobifone', realValue: '300.000 đ', cost: '287.500 đ', inCart: 0},
    {name: 'Mobifone 500k', type: 'Mobifone', realValue: '500.000 đ', cost: '487.000 đ', inCart: 0},
]
if (localStorage.getItem('product')==null){
    json=JSON.stringify(product)
    localStorage.setItem('product',json)
}
else{
    json=localStorage.getItem('product')
    product=JSON.parse(json)
}
let countPage=parseInt(product.length/6)+1
let pageNumber=localStorage.getItem('pageNumber')
if (pageNumber==null) pageNumber=1
pageNumber=parseInt(pageNumber)
localStorage.setItem('pageNumber',pageNumber)

let cardList=document.getElementById("card-list")
let a=product.length-6*(pageNumber-1);
if (a>6) a=6
for (let i=0;i<a;i++){
    var imgName=product[i+(pageNumber-1)*6].name.replace(' ','')
    if (product[i+(pageNumber-1)*6].realValue!=product[i+(pageNumber-1)*6].cost)
        cardList.innerHTML += `
            <div class="col-lg-3 m-5">
            <div class="card">
                <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                    <img class="card-img-top" src="./asset/image/${imgName}.png" alt="Card image">
                </button>
                <div class="card-body" >
                    <h4 class="card-title">${product[i+(pageNumber-1)*6].name} <i class="ri-fire-fill text-danger" style="float:right" ></i></h4>
                    <p class="card-text" style="text-decoration-line: line-through"> ${product[i+(pageNumber-1)*6].realValue}</p>
                    <h5 class="card-title text-danger reduce-cost">${product[i+(pageNumber-1)*6].cost}</h5>
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
                        <h4 class="card-title" style="min-height:70px;">${product[i+(pageNumber-1)*6].name}</h4>
                        <h5 class="card-title text-danger reduce-cost">${product[i+(pageNumber-1)*6].cost}</h5>
                        <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                        <a class="btn btn-danger text-light" style="float:right"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
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

// Thêm sản phẩm vào giỏ hàng
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
