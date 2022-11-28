let json=localStorage.getItem('product')
const product=JSON.parse(json)
const newProduct=document.getElementById('product')
json=localStorage.getItem('imgLink')
const imgLink=JSON.parse(json)
let header=document.getElementById('header')
header.innerHTML+=product.length;
let productList=document.getElementById('product-list')
for (let i=0;i<product.length;i++){
    productList.innerHTML+=`
                <hr>
                <div class="row" id="row-${i+1}">
                    <div class="col-1" style="text-align:center;">
                        <h5>${i+1}</h5>
                    </div>
                    <div class="col-2">
                        <h5>${product[i].name}</h5>
                    </div>
                    <div class="col-1">
                        <img class="card-img-top" style="width:100%;height:100%;" src="${imgLink[i]}" alt="Card image">
                    </div>
                    <div class="col-2">
                        <h5 style="text-align:center;">${product[i].type}</h5>
                     </div>
                    <div class="col-2">
                       <h5> ${parseInt(product[i].realValue).toLocaleString()}</h5>
                    </div>
                    <div class="col-2">
                        <h5>${parseInt(product[i].cost).toLocaleString()}</h5>
                    </div>
                    <div class="col-1">
                        <button type="button" class="btn btn-outline-success btn-edit" data-bs-toggle="modal" data-bs-target="#myModal-edit"><i class="ri-edit-2-line"></i></button>
                    </div>
                    <div class="col-1">
                        <button type="button" class="btn btn-outline-danger btn-delete" data-bs-toggle="modal" data-bs-target="#myModal-delete"><i class="ri-delete-bin-6-line"></i></button>
                    </div>   
                </div>
    
    `
}
let deleteBtn=document.querySelectorAll('.btn-delete')
for (let i=0;i<deleteBtn.length;i++){
    deleteBtn[i].addEventListener('click',function(){
        document.getElementById('header-name').innerText=`
            ${product[i].name}       
        `
        let confirmBtn=document.querySelector('.confirm-button')
        confirmBtn.addEventListener('click',function(){
            product.splice(i,1)
            imgLink.splice(i,1)
            json=JSON.stringify(product)
            localStorage.setItem('product',json)
            json=JSON.stringify(imgLink)
            localStorage.setItem('imgLink',json)
            window.location.href='productList.html'
        })
    })
}
let imgLink1
let img
let editBtn=document.querySelectorAll('.btn-edit')
const gridRadios=document.getElementsByName('gridRadios')
for (let i=0;i<editBtn.length;i++){
    editBtn[i].addEventListener('click',function(){
        document.getElementById('inputName').value=product[i].name
        document.getElementById('inputParValue').value=product[i].realValue
        document.getElementById('inputPrice').value=product[i].cost
        imgLink1=imgLink[i]
        for (var j = 0; j < gridRadios.length; j++){
            if (gridRadios[j].value == product[j].type){
                gridRadios[j].checked = true;
            }
        }
  
          if (product[i].realValue!=product[i].cost){
            newProduct.innerHTML = `
                <div class="col-lg-3 m-5">
                <div class="card">
                    <button class="btn btn-primary btn-modal" style="border: none;background: none;">
                        <img class="card-img-top" src="${imgLink1}" alt="Card image">
                    </button>
                    <div class="card-body" >
                        <h4 class="card-title">${product[i].name} <i class="ri-fire-fill text-danger" style="float:right" ></i></h4>
                        <p class="card-text" style="text-decoration-line: line-through"> ${parseInt(product[i].realValue).toLocaleString()}đ</p>
                        <h5 class="card-title text-danger reduce-cost">${parseInt(product[i].cost).toLocaleString()}đ</h5>
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
                        <button class="btn btn-primary btn-modal" style="border: none;background: none;">
                            <img class="card-img-top" src="${imgLink1}" alt="Card image">
                        </button>
                        <div class="card-body" >
                            <h4 class="card-title" style="min-height:70px;">${inputName.value}</h4>
                            <h5 class="card-title text-danger reduce-cost">${parseInt(product[i].realValue).toLocaleString()}</h5>
                            <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                            <a class="btn btn-danger text-light pay-button" style="float:right" data-bs-toggle="modal" data-bs-target="#myModal-pay"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
                        </div>
                    </div>
                    </div>      
                `
                const btnConfirm=document.querySelector('#btn-confirm')
                btnConfirm.addEventListener('click',function(){
                    for (let j = 0; j < gridRadios.length; j++){
                        if (gridRadios[j].checked === true){
                            radios=gridRadios[j].value;
                        }
                    }
                    if (inputName.value==''||inputParValue.value==''||inputPrice.value==''||radios=='')
                        alert('Vui lòng nhập đầy đủ thông tin')
                    else{
                        product[i].name=inputName.value
                        product[i].realValue=inputParValue.value
                        product[i].cost=inputPrice.value
                        product[i].type=radios
                        json=JSON.stringify(product)
                        localStorage.setItem('product',json)
                        imgLink[i]=imgLink1
                        json=JSON.stringify(imgLink)
                        localStorage.setItem('imgLink',json)
                        window.location.href="productList.html"
                    }
})
            });
    }

const fileUpload = document.querySelector('#img-upload');
const reader = new FileReader();

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
const btnCheck=document.querySelector('#btn-check')

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
        if (img!=null)
            imgLink1=img.src
        if (inputParValue.value!=inputPrice.value){
            newProduct.innerHTML = `
                <div class="col-lg-3 m-5" style="min-width:400px;">
                <div class="card">
                    <button class="btn btn-primary btn-modal" style="border: none;background: none;">
                        <img class="card-img-top" src="${imgLink1}" alt="Card image">
                    </button>
                    <div class="card-body" >
                        <h4 class="card-title">${inputName.value} <i class="ri-fire-fill text-danger" style="float:right" ></i></h4>
                        <p class="card-text" style="text-decoration-line: line-through"> ${parseInt(inputParValue.value).toLocaleString()}đ</p>
                        <h5 class="card-title text-danger reduce-cost">${parseInt(inputPrice.value).toLocaleString()}đ</h5>
                        <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                        <a class="btn btn-danger text-light pay-button" style="float:right"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
                    </div>
                </div>
                </div>      
            `
        }
        else
            newProduct.innerHTML = `
                    <div class="col-lg-3 m-5" style="min-width:400px;">
                    <div class="card">
                        <button class="btn btn-primary btn-modal" style="border: none;background: none;min-width:400px;">
                            <img class="card-img-top" src="${imgLink1}" alt="Card image">
                        </button>
                        <div class="card-body" >
                            <h4 class="card-title" style="min-height:70px;">${inputName.value}</h4>
                            <h5 class="card-title text-danger reduce-cost">${parseInt(inputPrice.value).toLocaleString()}</h5>
                            <a class="add-cart cart 1 btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                            <a class="btn btn-danger text-light pay-button" style="float:right"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
                        </div>
                    </div>
                    </div>      
                `
    }
})
