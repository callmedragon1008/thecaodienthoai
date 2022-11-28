const fileUpload = document.querySelector('#img-upload');
const inputName=document.querySelector('#inputName');
const inputParValue=document.querySelector('#inputParValue')
const inputPrice=document.querySelector('#inputPrice')
const gridRadios=document.getElementsByName('gridRadios')
const btnCheck=document.querySelector('#btn-check')
const newProduct=document.querySelector('#product')
const btnConfirm=document.querySelector('#btn-confirm')
const reader = new FileReader();
let json
let img
json=localStorage.getItem('product')
let product=JSON.parse(json)
json=localStorage.getItem('imgLink')
let imgLink=JSON.parse(json)
let product1
let imgLink1
fileUpload.addEventListener('change', (event) => {
    const files = event.target.files;
    const file = files[0];
    reader.readAsDataURL(file);
    
    reader.addEventListener('load', (event) => {
      img = document.createElement('img');
      img.src = event.target.result;
      img.alt = file.name;
    });
  });
let radios=''
btnCheck.addEventListener('click',function(){
    for (var i = 0; i < gridRadios.length; i++){
        if (gridRadios[i].checked === true){
            radios=gridRadios[i].value;
        }
    }
    if (inputName.value==''||inputParValue.value==''||inputPrice.value==''||radios=='')
        alert('Vui lòng nhập đầy đủ thông tin')
    else
    {
        product1={
            name: inputName.value,
            type: radios, 
            realValue: inputParValue.value, 
            cost: inputPrice.value, 
            inCart: 0
        }
        imgLink1=img.src
        if (inputParValue.value!=inputPrice.value){
            newProduct.innerHTML = `
                <div class="col-lg-3 m-5">
                <div class="card">
                    <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                        <img class="card-img-top" src="${imgLink1}" alt="Card image">
                    </button>
                    <div class="card-body" >
                        <h4 class="card-title">${inputName.value} <i class="ri-fire-fill text-danger" style="float:right" ></i></h4>
                        <p class="card-text" style="text-decoration-line: line-through"> ${parseInt(inputParValue.value).toLocaleString()}đ</p>
                        <h5 class="card-title text-danger reduce-cost">${parseInt(inputPrice.value).toLocaleString()}đ</h5>
                        <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                        <a class="btn btn-danger text-light pay-button" style="float:right" data-bs-toggle="modal" data-bs-target="#myModal-pay"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
                    </div>
                </div>
                </div>      
            `
        }
        else
            newProduct.innerHTML = `
                    <div class="col-lg-3 m-5">
                    <div class="card">
                        <button class="m-0 p-0 btn btn-primary btn-modal" style="border: none;background: none;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                            <img class="card-img-top" src="${imgLink1}" alt="Card image">
                        </button>
                        <div class="card-body" >
                            <h4 class="card-title" style="min-height:70px;">${inputName.value}</h4>
                            <h5 class="card-title text-danger reduce-cost">${parseInt(inputPrice.value).toLocaleString()}</h5>
                            <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                            <a class="btn btn-danger text-light pay-button" style="float:right" data-bs-toggle="modal" data-bs-target="#myModal-pay"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
                        </div>
                    </div>
                    </div>      
                `
    }
})
btnConfirm.addEventListener('click',function(){
    if (inputName.value==''||inputParValue.value==''||inputPrice.value==''||radios=='')
        alert('Vui lòng nhập đầy đủ thông tin')
    else{
        product.push(product1)
        json=JSON.stringify(product)
        localStorage.setItem('product',json)
        imgLink.push(imgLink1)
        json=JSON.stringify(imgLink)
        localStorage.setItem('imgLink',json)
        alert("Đã thêm sản phẩm")
        window.location.href="addProduct.html"
    }
})