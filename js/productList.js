let json=localStorage.getItem('product')
const product=JSON.parse(json)
let header=document.getElementById('header')
header.innerHTML+=product.length;
let productList=document.getElementById('product-list')
for (let i=0;i<product.length;i++){
    productList.innerHTML+=`
                <hr>
                <div class="row">
                    <div class="col-1" style="text-align:center;">
                        <h5>${i+1}</h5>
                    </div>
                    <div class="col-2">
                        <h5>${product[i].name}</h5>
                    </div>
                    <div class="col-2">
                        <h5>${product[i].type}</h5>
                     </div>
                    <div class="col-2">
                       <h5> ${parseInt(product[i].realValue).toLocaleString()}</h5>
                    </div>
                    <div class="col-2">
                        <h5>${parseInt(product[i].cost).toLocaleString()}</h5>
                    </div>
                    <div class="col-1">
                        <button type="button" class="btn btn-outline-success"><i class="ri-edit-2-line"></i></button>
                    </div>
                    <div class="col-1">
                        <button type="button" class="btn btn-outline-danger"  data-bs-toggle="modal" data-bs-target="#myModal-delete"><i class="ri-delete-bin-6-line"></i></button>
                    </div>
                </div>
    
    `
}