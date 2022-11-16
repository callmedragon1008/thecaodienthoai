let countOrder=localStorage.getItem('countOrder')
let orderList=document.getElementById('order-list')
let order=[]
let json
let telephone
let sum
for (let i=1;i<=countOrder;i++){
    json=localStorage.getItem('order'+i)
    order=JSON.parse(json)
    telephone=localStorage.getItem('telephone'+i)
    orderList.innerHTML+=`
                <div class="middle-container mb-3">
                    <div class="row">
                        <div class="col-md-1">
                            <h5>${i}</h5>
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
                </div>
                `
    sum=parseInt(order[0].productCost)*parseInt(order[0].productInCart)
    for (let j=1;j<order.length;j++){
        sum+=parseInt(order[j].productCost)*parseInt(order[j].productInCart)
        orderList.innerHTML+=`
        <div class="middle-container mb-3">
                    <div class="row">
                        <div class="col-md-1">
                        </div>
                        <div class="col-md-3">
                        </div>

                        <div class="col-md-2">
                            <h5>${order[j].productName}</h5>
                        </div>
                        <div class="col-2">
                            <h5>${order[j].productCost}</h5>
                        </div>
                        <div class="col-2">
                            <h5>${order[j].productInCart}</h5>
                        </div>
                        <div class="col-2 d-flex"  style="text-align:right;">
                            <h5>${parseInt(order[j].productCost)*parseInt(order[j].productInCart)}</h5>
                        </div>
                    </div>
                </div>
                            `
                            
}
orderList.innerHTML+=`<div class="row">
                            <div class="col-2">
                                <h5></h5>
                            </div>
                            <div class="col-4">
                                <h5></h5>
                            </div>
                            <div class="col-2">
                                <h5>Tổng Cộng:</h5>
                            </div>
                            <div class="col-3 d-flex justify-content-end">
                                <h5 class="total-price">${sum}</h5>
                            </div>
                        </div>
                        <br>
                        <hr>
                        <br>
                        `
}