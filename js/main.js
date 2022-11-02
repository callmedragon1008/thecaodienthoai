let buyCards=document.querySelectorAll(".btn.btn-primary.btn-modal")
let count=0;
let temp=0;
for (const buyCard of buyCards){
  buyCard.addEventListener('click',function(){
    temp=1;
    count++;
    console.log("dat");
    console.log(count);
    })
}
