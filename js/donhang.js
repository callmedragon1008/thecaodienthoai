let countOrder=localStorage.getItem('countOrder')
if (countOrder==null)
    countOrder='0'
let orderList=document.getElementById('order-list')
let order=[]
let json
let telephone
let customer
let sum
orderList.innerHTML+=`
    <h3 style="text-align: left;">Số lượng đơn hàng:  ${countOrder}</h3>
    <br>
` 
for (let i=1;i<=countOrder;i++){
    json=localStorage.getItem('order'+i)
    order=JSON.parse(json)
    telephone=localStorage.getItem('telephone'+i)
    customer=localStorage.getItem('customer'+i)
    orderList.innerHTML+=`
    <div class="middle-container mb-3">
                    <div class="row">
                        <div class="col-md-4">
                            <a href="#order-submenu-${i}" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="ri-arrow-drop-down-line"></i> <i class="ri-archive-line"></i> <h4 class="ms-1 d-none d-sm-inline">Mã số đơn hàng:  ${i}</h4> </a>
                        </div>
                        <div class="col-5">
                            <h4>Tên tài khoản: ${customer}</h4>
                        </div>
                        <div class="col-3">
                        <h4>Số điện thoại: ${telephone}</h4>
                        </div>
                    </div>
                </div>
    `
    sum=parseInt(order[0].productCost)*parseInt(order[0].productInCart)
    for (let j=1;j<order.length;j++){
        sum+=parseInt(order[j].productCost)*parseInt(order[j].productInCart)
    }
    orderList.innerHTML+=`
    <div class="middle-container mb-3 collapse nav flex-column ms-1" id="order-submenu-${i}" data-bs-parent="#menu">
                    <hr>
                    <div class="row">
                        <div class="col-md-1">
                        </div>
                        <div class="col-md-3">
                            <h5>Trạng thái</h5>
                        </div>
                        <div class="col-md-2">
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
                <div class="middle-container mb-3 collapse nav flex-column ms-1" id="order-submenu-${i}" data-bs-parent="#menu">
                    <div class="row">
                        <div class="col-md-1">
                        </div>
                        <div class="col-md-3">
                            <h5>Chưa thanh toán</h5>
                        </div>

                        <div class="col-md-2">
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
//                         <div class="col-md-2">
//                             <h5>${order[j].productName}</h5>
//                         </div>
//                         <div class="col-2">
//                             <h5>${order[j].productCost}</h5>
//                         </div>
//                         <div class="col-2">
//                             <h5>${order[j].productInCart}</h5>
//                         </div>
//                         <div class="col-2 d-flex"  style="text-align:right;">
//                             <h5>${parseInt(order[j].productCost)*parseInt(order[j].productInCart)}</h5>
//                         </div>
//                     </div>
//                 </div>
//                             `
                            
// }
// orderList.innerHTML+=`<div class="row">
//                             <div class="col-2">
//                                 <h5></h5>
//                             </div>
//                             <div class="col-4">
//                                 <h5></h5>
//                             </div>
//                             <div class="col-2">
//                                 <h5>Tổng Cộng:</h5>
//                             </div>
//                             <div class="col-3 d-flex justify-content-end">
//                                 <h5 class="total-price">${sum}</h5>
//                             </div>
//                         </div>
//                         <div class="row">
//                             <div class="col-4">
//                                 <h5></h5>
//                             </div>
//                         </div>
//                         <br>
//                         <hr>
//                         `

/* <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
        <i class="ri-arrow-drop-down-line"></i> <i class="ri-archive-line"></i> <span class="ms-1 d-none d-sm-inline">Sản phẩm</span> </a>
        <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                        <li class="w-100">
                                        <a href="./addProduct.html" class="nav-link px-0"> <span class="d-none d-sm-inline">Thêm sản phẩm</span> </a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Xóa sản phẩm</span> </a>
                                    </li>
                                    <li>
                                        <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Sửa sản phẩm</span> </a>
                                    </li>*/

