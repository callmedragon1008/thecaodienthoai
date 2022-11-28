let countOrder='5'
let orderList=document.getElementById('order-list')
let order=[]
let json=localStorage.getItem('customerList')
let customerList=JSON.parse(json)
json=localStorage.getItem('telephoneList')
let telephone=JSON.parse(json)
let sum
orderList.innerHTML+=`
    <h3 style="text-align: left;">Số lượng đơn hàng:  ${countOrder}</h3>
    <br>
` 
for (let i=1;i<=countOrder;i++){
    order=[{
    productCost: "50000",
    productInCart: 3,
    productName: "Viettel 50.000",
    productType: "Viettel"
    }
    ,{
    productCost: "10000",
    productInCart: 6,
    productName: "Vietnamobile 10.000",
    productType: "Vietnamobile"}
    ,{
    productCost: "200000",
    productInCart: 4,
    productName: "Vinaphone 200.000",
    productType: "Vinaphone"}
    ,{
    productCost: "50000",
    productInCart: 3,
    productName: "Mobifone 50.000",
    productType: "Mobifone"}
]
    orderList.innerHTML+=`
    <div class="middle-container mb-3">
                    <div class="row">
                        <div class="col-md-4">
                            <a href=".order-submenu-${i}" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="ri-arrow-drop-down-line"></i> <i class="ri-archive-line"></i> <h4 class="ms-1 d-none d-sm-inline">Mã số đơn hàng:  ${i}</h4> </a>
                        </div>
                        <div class="col-4">
                            <h4>Tên tài khoản: ${customerList[i].username}</h4>
                        </div>
                        <div class="col-4">
                        <h4>Số điện thoại: ${telephone[i]}</h4>
                        </div>
                    </div>
                </div>
    `
    sum=parseInt(order[0].productCost)*parseInt(order[0].productInCart)
    for (let j=1;j<order.length;j++){
        sum+=parseInt(order[j].productCost)*parseInt(order[j].productInCart)
    }
    orderList.innerHTML+=`
            <div class="middle-container mb-3 collapse nav flex-column ms-1 order-submenu-${i}" data-bs-parent="#menu">
                    <hr>
                    <div class="row">
                        <div class="col-md-3">
                            <h5>Trạng thái</h5>
                        </div>
                        <div class="col-md-3">
                            <h5>Tên sản phẩm</h5>
                        </div>
                        <div class="col-2">
                            <h5>Giá tiền</h5>
                        </div>
                        <div class="col-2">
                            <h5>Số lượng</h5>
                        </div>
                        <div class="col-2 d-flex">
                            <h5>Tổng tiền</h5>
                        </div>
                    </div>
            </div>
                <div class="middle-container mb-3 collapse nav flex-column ms-1 order-submenu-${i}" id="content-submenu-${i}" data-bs-parent="#menu">
                    <div class="row">
                        <div class="col-md-3">
                            <input type="checkbox" value="n">Chưa xử lí
                        </div>

                        <div class="col-md-3">
                            <h5>${order[0].productName}</h5>
                        </div>
                        <div class="col-2">
                            <h5>${order[0].productCost}</h5>
                        </div>
                        <div class="col-2">
                            <h5>${order[0].productInCart}</h5>
                        </div>
                        <div class="col-2 d-flex">
                            <h5>${parseInt(order[0].productCost)*parseInt(order[0].productInCart)}</h5>
                        </div>
                    </div>
                </div>
                `
    temp=document.getElementById('content-submenu-'+i)
    for (let j=1;j<order.length;j++){
        temp.innerHTML+=`
            <div class="row">
                        <div class="col-md-3">
                        </div>

                        <div class="col-md-3">
                            <h5>${order[j].productName}</h5>
                        </div>
                        <div class="col-2">
                            <h5>${order[j].productCost}</h5>
                        </div>
                        <div class="col-2">
                            <h5>${order[j].productInCart}</h5>
                        </div>
                        <div class="col-2 d-flex">
                            <h5>${parseInt(order[j].productCost)*parseInt(order[j].productInCart)}</h5>
                        </div>
            </div>
                    `
        }
    temp.innerHTML+=`
        <div class="row">
            <div class="col-md-3">
            </div>
            <div class="col-md-3">
            </div>
            <div class="col-md-3">
                <h5>Tổng cộng:</h5>
            </div>
            <div class="col-md-3">
                <h5>${sum}</h5>
            </div>
        </div>

        `
    }

