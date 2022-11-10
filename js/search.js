let json=localStorage.getItem('product')
product=JSON.parse(json)
let select=localStorage.getItem('select')
let searchInputText=localStorage.getItem('searchInputText')
let productList=document.getElementById("product-list")
if (select!='Danh mục'){
    for (let i=0;i<product.length;i++){
        var temp=product[i].cost.toLocaleString();
        if (product[i].type==select&&(product[i].name.lastIndexOf(searchInputText)||product[i].realValue.lastIndexOf(searchInputText)))
            productList.innerHTML+=`
        <div class="col-lg mt-5">
            <div class="card d-flex justify-content-center" style="width:400px">
                <img class="card-img-top" src="./asset/image/${product[i].name}.jpeg" alt="Card image">
                <div class="card-body">
                    <h4 class="card-title">${product[i].name}</h4>
                    <p class="card-text" style="text-decoration-line: line-through"> ${product[i].realValue}</p>
                    <h5 class="card-title text-danger">${temp}</h5>
                    <a class="btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                    <a class="btn btn-danger text-light" style="float:right"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
                </div>
            </div>
        </div>  `
    }
}
else
    for (let i=0;i<product.length;i++){
        var temp=product[i].cost.toLocaleString();
        if ((product[i].name.lastIndexOf(searchInputText)!=-1||product[i].realValue.lastIndexOf(searchInputText)!=-1))
            productList.innerHTML+=`
            <div class="col-lg mt-5">
            <div class="card d-flex justify-content-center" style="width:400px">
                <img class="card-img-top" src="./asset/image/${product[i].name}.jpeg" alt="Card image">
                <div class="card-body">
                    <h4 class="card-title">${product[i].name}</h4>
                    <p class="card-text" style="text-decoration-line: line-through"> ${product[i].realValue}</p>
                    <h5 class="card-title text-danger">${temp}</h5>
                    <a class="btn btn-primary text-light"><i class="ri-shopping-cart-2-fill"></i></a>
                    <a class="btn btn-danger text-light" style="float:right"><i class="ri-shopping-bag-fill"></i>Mua ngay</a>
                </div>
            </div>
        </div>  `
}