const adminContent=document.getElementById('admin-content')
const countOrder=localStorage.getItem('countOrder')
const countCustomer=localStorage.getItem('countCustomer')
let json=localStorage.getItem('product')
const product=JSON.parse(json)
let order=[]
let temp
let sumSell=0
let sell=[0,0,0,0]
for (let i=1;i<=countOrder;i++){
    json=localStorage.getItem('order' + i)
    temp=JSON.parse(json)
    order.push(temp)
}
for (let i=0;i<order.length;i++){
    for (let j=0;j<order[i].length;j++){
        sumSell+=order[i][j].productInCart;
        if (order[i][j].productType=='Viettel')
            sell[0]+=order[i][j].productInCart
        if (order[i][j].productType=='Mobifone')
           sell[1]+=order[i][j].productInCart
        if (order[i][j].productType=='Vinaphone')
            sell[2]+=order[i][j].productInCart
        if (order[i][j].productType=='Vietnamobile')
            sell[3]+=order[i][j].productInCart
    }
}
for (let i=0;i<order.length;i++){
    for (let j=0;j<order[i].length;j++){
        product[order[i][j].id].inCart+=order[i][j].productInCart
    }
}
let max=0
let indexMax=0
for (let i=0;i<4;i++){
    if (sell>=max){
        max=a[i]
        indexMax=i
    }
}
let bestSeller='Viettel'
if (indexMax==1) bestSeller='Mobifone'
if (indexMax==2) bestSeller='Vinaphone'
if (indexMax==3) bestSeller='VietNamobile'

adminContent.innerHTML=`
    <div class="row" id="row-1">
        <div class="col-4">
            <h3>Thống kê tình hình kinh doanh</h3>
        </div>

        <div class="col-3">
        </div>
        
        <div class="col-4">
            <h3>Loại sản phẩm bán chạy : ${bestSeller}</h3>
        </div>
    </div>
    <hr>
    <div class="row" id="row-2">
        <div class="col-4">
            <canvas id="canvas-0"></canvas>
        </div>
        <div class="col-3">
            <br>
            <br>
            <br>
            <h4>Số khách hàng: ${countCustomer}</h4>
            <h4>Số sản phẩm đã bán: ${sumSell}</h4>
            <h4>Tổng số đơn hàng: ${countOrder}</h4>
        </div>
        <div class="col-4">
            <canvas id="canvas-1"></canvas>
        </div>
    </div>
    <br>
    <br>
    <br>
    <div class="row" id="row-3">
    </div>
    <hr>
    <div class="row" id="row-4">
    </div>
`
let data = {
    labels: [
        'Viettel',
        'Mobifone',
        'Vinaphone',
        'Vietnamobile',
    ],
    datasets: [{
        data: [sell[0], sell[1], sell[2],sell[3]],
        backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'blue',
        'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
    }]
    };
let config = {
        type: 'pie',
        data: data,
        };
var myPieChart = new Chart(document.getElementById("canvas-0").getContext("2d"),config);
let labels=[]
let sellProduct=[]
let backgroundColor=[]
let temp1=255
let temp2=0
let temp3=0
for (let i=0;i<product.length;i++)
{
    if (product[i].type==bestSeller){
        labels.push(product[i].name)
        sellProduct.push(product[i].inCart)
        backgroundColor.push('rgb('+temp1+', '+ temp2+', '+temp3+')')
    }
    temp1-=20
    temp2+=40
    temp3+=80
}
data = {
    labels:labels,
    datasets:[{
        data:sellProduct,
        backgroundColor:backgroundColor,
        hoverOffset: 6,
    }]
    // datasets:dataset,
}
config = {
    type: 'pie',
    data: data,
    };
myPieChart = new Chart(document.getElementById("canvas-1").getContext("2d"),config);
let count=2
for (let j=0;j<4;j++){
    if (j==indexMax) continue
    if (j==0) temp='Viettel'
    if (j==1) temp='Mobifone'
    if (j==2) temp='Vinaphone'
    if (j==3) temp='Vietnamobile'
    document.getElementById('row-3').innerHTML+=`
    <div class="col-4">
        <h3>Loại sản phẩm : ${temp}</h3>
    </div>
    `
    document.getElementById('row-4').innerHTML+=`
    <div class="col-4">
        <canvas id="canvas-${count}"></canvas>
    </div>
        `
    labels=[]
    sellProduct=[]
    backgroundColor=[]
    temp1=255
    temp2=0
    temp3=0
    for (let i=0;i<product.length;i++)
    {
        if (product[i].type==temp){
            labels.push(product[i].name)
            sellProduct.push(product[i].inCart)
            backgroundColor.push('rgb('+temp1+', '+ temp2+', '+temp3+')')
            temp1-=20
            temp2+=40
            temp3+=80
        } 
    }
    data = {
        labels:labels,
        datasets:[{
            data:sellProduct,
            backgroundColor:backgroundColor,
            hoverOffset: 6,
        }]
    }
    config = {
        type: 'pie',
        data: data,
        };
    var myPieChart = new Chart(document.getElementById("canvas-"+count).getContext("2d"),config);
    console.log(myPieChart)
    count++;
}
// đm con tó viết ra javacript