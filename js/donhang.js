let countOrder=localStorage.getItem('countOrder')
let orderList=document.getElementById('order-list')
let order=[]
let json
let telephone
for (let i=1;i<=countOrder;i++){
    json=localStorage.getItem('order'+i)
    order=JSON.parse(json)
    telephone=localStorage.getItem('telephone'+i)
    orderList.innerHTML+=`<div class="small-middle-container" style="text-align: center;">
    <div class="row">
        <div class="col-1">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </div>
        </div>
        <div class="col-2">
            <p>${i}</p>
        </div>
        <div class="col-3">
            <p>Viettel 100k</p>
            <p>Viettel 20k</p>
            <p>Viettel 1000k</p>
        </div>
        <div class="col-3">
            <p>1</p>
            <p>2</p>
            <p>3</p>
        </div>
        <div class="col-3">
            <p class="d-flex justify-content-end">100.000 đ</p>
            <p class="d-flex justify-content-end">40.000 đ</p>
            <p class="d-flex justify-content-end">1.000.000 đ</p>
        </div>
    </div>
</div>
<div class="small-middle-container" style="text-align: center;">
    <div class="row">
        <div class="col-1">
        </div>
        <div class="col-2">
        </div>
        <div class="col-3">
        </div>
        <div class="col-3">
            <h5>Tổng cộng</h5>
        </div>
        <div class="col-3 d-flex justify-content-end">
            <p>1.140.000 đ</p>
        </div>
    </div>
</div>
    `
}