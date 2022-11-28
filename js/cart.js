// header
let headerLogin=document.querySelector('.header-login')
let headerUser=document.querySelector('.header-user-name')
let headerLogout=document.querySelector('.header-log-out')
let name1=localStorage.getItem('username1')
let status1=localStorage.getItem('status')
status1=parseInt(status1)
// btnModals:đếm số sản phẩm
let btnModals=document.querySelectorAll(".btn-modal")
if (status1==1){
    // localStorage.setItem('numberCart',0)
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
let count=[]
let dem=0
for (let i=0;i<cart.length;i++){
    if (cart[i].inCart!=0){
        count.push(i)
        cart[i].cost=cart[i].cost.replace('.','')
        var temp=parseInt(cart[i].inCart)*parseInt(cart[i].cost)
        sum=sum+temp        
        temp=temp.toLocaleString();
        productContainer.innerHTML += `
        <div class="small-middle-container" id="cart-child-${dem}" style="text-align: center;margin-bottom: 1rem">
        <div class="row">
            <div class="col-1">
                <button type="button" class="navbar-toggler delete">
                    <span class="text-danger d-flex align-items-center">
                        <i class="ri-delete-bin-5-line"></i>
                    </span>
                </button>
            </div>
            <div class="col-3">
                <span>${cart[i].name}</span>
            </div>
            <div class="col-2">
                <span>${cart[i].cost}</span>
            </div>
            <div class="col-3 in-cart">
                <button class="navbar-toggler minus" type="button" style="margin-right:20px;" ><i class="ti-minus text-danger"></i></button>
                <span style="font-size:19px;">${cart[i].inCart}</span>
                <button class="navbar-toggler plus" type="button" style="margin-left:20px;"><i class="ti-plus text-primary"></i></button>
            </div>
            <div class="col-3 d-flex justify-content-end">
                <h5 class="sum-cart">${temp}đ</h5>
            </div>
            
        </div>
    </div>            `
    dem++;
    } 
}
let sum1=sum.toLocaleString();
productTotal.innerHTML+=`
            <span>${sum1}đ<span>
        `
let btnMinus=document.querySelectorAll(".minus")
let btnPlus=document.querySelectorAll(".plus")
let cart1=document.querySelectorAll(".in-cart span")
let sumCart=document.querySelectorAll(".sum-cart")
let btnDeletes=document.querySelectorAll(".delete")
for (let i=0;i<btnDeletes.length;i++)
{
    btnDeletes[i].addEventListener('click',function(){
            var deleteChild=document.getElementById("cart-child-"+i)
            numberCart=numberCart-cart[count[i]].inCart;
            document.querySelector('.cart span').innerText = numberCart;
            localStorage.setItem("numberCart1",numberCart)
            temp=parseInt(cart[count[i]].cost)*parseInt(cart[count[i]].inCart)
            sum=sum-temp
            sum1=sum.toLocaleString();
            productTotal.innerHTML=`
            <span>${sum1}đ<span>
        `
            sumCart[i].innerText=temp
            cart[count[i]].inCart=0
            temp=JSON.stringify(cart)
            localStorage.setItem("product",temp)
            deleteChild.innerHTML=``
    })
}
for (let i=0;i<btnMinus.length;i++)
{
    btnMinus[i].addEventListener('click',function(){
        if (cart[count[i]].inCart>1){
            cart1[i].innerHTML=cart[count[i]].inCart-1;
            cart[count[i]].inCart--;
            numberCart--;
            document.querySelector('.cart span').innerText = numberCart;
            localStorage.setItem("numberCart1",numberCart)
            temp=JSON.stringify(cart)
            localStorage.setItem("product",temp)
            temp=parseInt(cart[count[i]].cost)
            sum=sum-temp
            sum1=sum.toLocaleString();
            productTotal.innerHTML=`
            <span>${sum1}đ<span>
        `
            temp=parseInt(cart[count[i]].cost)*parseInt(cart[count[i]].inCart)
            temp=temp.toLocaleString();
            sumCart[i].innerText=temp
        }
    })
}

for (let i=0;i<btnPlus.length;i++)
{
    btnPlus[i].addEventListener('click',function(){
            cart1[i].innerHTML=cart[count[i]].inCart+1;
            cart[count[i]].inCart++;
            numberCart++;
            document.querySelector('.cart span').innerText = numberCart;
            localStorage.setItem("numberCart1",numberCart)
            // product[count[i]].inCart=cart[count[i]].inCart
            temp=JSON.stringify(cart)
            localStorage.setItem("product",temp)
            temp=parseInt(cart[count[i]].cost)
            sum=sum+temp
            sum1=sum.toLocaleString();
            productTotal.innerHTML=`
            <span>${sum1}đ<span>
        `
            temp=parseInt(cart[count[i]].cost)*parseInt(cart[count[i]].inCart)
            temp=temp.toLocaleString();
            sumCart[i].innerText=temp
    })
}


// Thanh toán

let confirmBtn=document.querySelector('.confirm-button')
let telephone=document.getElementById('telephone-input')
let order=[]
let customer=[]
let orderID=localStorage.getItem('countOrder')
if (orderID==null) orderID=1
else orderID++
confirmBtn.addEventListener('click',function(){
    if (status1!=1)
        alert('Vui lòng đăng nhập để thanh toán')
    else{
        if (telephone.value==''||telephone.value.length<7||telephone.value.indexOf('0')!=0)
            alert('Vui lòng nhập số điện thoại hợp lệ')
        else{
            for (let i=0;i<cart.length;i++){
                localStorage.setItem('countOrder',orderID)
                if (cart[i].inCart!=0){
                    order.push({
                        id:i,
                        productName:cart[i].name,
                        productType:cart[i].type,
                        productRealValue:cart[i].replace,
                        productCost:cart[i].cost,
                        productInCart:cart[i].inCart,
                    })
                    cart[i].inCart=0
                }
            }
            json=JSON.stringify(cart)
            localStorage.setItem('product',json)
            localStorage.setItem('numberCart1',0)
            json=JSON.stringify(order)
            localStorage.setItem('order'+orderID,json)
            localStorage.setItem('telephone'+orderID,telephone.value)
            localStorage.setItem('customer'+orderID,name1)
            alert('Đơn hàng đang được xử lý')
            window.location.href="shopping-cart.html"
        }
    }
})


let headerLogo=document.querySelector('.header-logo')
headerLogo.addEventListener('click',function(){
    localStorage.setItem('pageNumber',1)
})

// Đơn hàng đã đặt
let cartBtn=document.querySelector('#cart-1')
if (status1!=1) cartBtn.href="shopping-cart.html"