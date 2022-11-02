
// modal
let btnModals=document.querySelectorAll(".btn-modal")
let title=document.getElementsByClassName("card-title")
let cost=document.getElementsByClassName("card-text")
let reduceCost=document.getElementsByClassName("reduce-cost")
for (let i=0;i<btnModals.length;i++){
  btnModals[i].addEventListener('click',function(){
    var string=title[2*i].innerText;
    var type=string.slice(0,string.search(" "))
    var modalText='Mệnh giá: '+cost[i].innerText+'<br/>'+'Loại thẻ: '+type+'<br/>'+'Giá: '+reduceCost[i].innerText;
    document.getElementById("modal-text").innerHTML=modalText;   
  })
}
