// <!-- Đức Phật nơi đây xin phù hộ code con chạy không Bug. Nam mô A Di Đà Phật.
//                            _
//                         _ooOoo_
//                        o8888888o
//                        88" . "88
//                        (| -_- |)
//                        O\  =  /O
//                     ____/`---'\____
//                   .'  \\|     |//  `.
//                  /  \\|||  :  |||//  \
//                 /  _||||| -:- |||||_  \
//                 |   | \\\  -  /'| |   |
//                 | \_|  `\`---'//  |_/ |
//                 \  .-\__ `-. -'__/-.  /
//               ___`. .'  /--.--\  `. .'___
//            ."" '<  `.___\_<|>_/___.' _> \"".
//           | | :  `- \`. ;`. _/; .'/ /  .' ; |
//           \  \ `-.   \_\_`. _.'_/_/  -' _.' /
// ===========`-.`___`-.__\ \___  /__.-'_.'_.-'================
//                         `=--=-'         ＜（＾－＾）＞ -->
const adminContent=document.getElementById('admin-content')
const countOrder=localStorage.getItem('countOrder')
const countCustomer=localStorage.getItem('countCustomer')
let json=localStorage.getItem('product')
const product=JSON.parse(json)
for (let i=0;i<product.length;i++){
    product[i].inCart=0
}
let order=[]
let temp
let sumSell=0
let sell=[0,0,0,0]
for (let i=1;i<=countOrder;i++){
    order.push([{
        id:3,
        productCost: "50000",
        productInCart: 9,
        productName: "Viettel 100.000",
        productType: "Viettel"
        },{
        id:4,
        productCost: "100000",
        productInCart: 12,
        productName: "Viettel 200.000",
        productType: "Viettel"
        }
        ,{
        id:6,
        productCost: "10000",
        productInCart: 4,
        productName: "Vietnamobile 10.000",
        productType: "Vietnamobile"}
        ,{
        id:7,
        productCost: "20000",
        productInCart: 7,
        productName: "Vietnamobile 20.000",
        productType: "Vietnamobile"}
        ,{
        id:9,
        productCost: "100000",
        productInCart: 6,
        productName: "Vietnamobile 100.000",
        productType: "Vietnamobile"}
        ,{
        id:13,
        productCost: "10000",
        productInCart: 3,
        productName: "Vinaphone 10.000",
        productType: "Vinaphone"}
        ,{
        id:17,
        productCost: "100000",
        productInCart: 7,
        productName: "Vinaphone 100.000",
        productType: "Vinaphone"},
        {
            id:23,
            productCost: "30000",
            productInCart: 7,
            productName: "Mobifone 30.000",
            productType: "Mobifone"}
    ]
    )
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
    <div class="row">
        <div class="col-2">
            <h3 style="text-align: left;">Từ ngày:</h3>
            <input type="date" name="bday">
        </div>
        <div class="col-2">
            <h3>Đến ngày:</h3>
            <input type="date" value="kday">
            <input type="submit" value="Xác nhận">
        </div>
    </div>
    <br>
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
        <div class="col-4">
            <canvas id="canvas-2"></canvas>
        </div>
        <div class="col-4">
            <canvas id="canvas-3"></canvas>
        </div>
        <div class="col-4">
            <canvas id="canvas-4"></canvas>
        </div>
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
    
    if (count==2){
        var PieChart2 = new Chart(document.getElementById('canvas-2').getContext("2d"),config);
    }
    if (count==3){
        var PieChart3 = new Chart(document.getElementById('canvas-3').getContext("2d"),config);
    }
    if (count==4){
        var PieChart4 = new Chart(document.getElementById('canvas-4').getContext("2d"),config);
    }
    console.log(count)
    count++;
}
console.log(config)