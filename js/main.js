let buyCards=document.querySelectorAll(".btn.btn-primary.btn-modal")
let count=0;
let temp=0;
for (const buyCard of buyCards){
  count++;
  buyCard.addEventListener('click',function(){
    temp=1;
    console.log("dat");
    console.log(count);
    })
  
}


  // const buyBtns = document.querySelectorAll('.js-buy-ticket')
  //       const modal=document.querySelector(".modal")
  //       const modalClose=document.querySelector(".js-modal-close")
  //       const modalContainer=document.querySelector(".js-modal-container")
  //       // thêm class open
  //       function showBuyTickets() {
  //           modal.classList.add('open')
  //       }
  //       // bỏ class open
  //       function removeBuyTickets() {
  //           modal.classList.remove('open')
  //       }
  //       for (const buyBtn of buyBtns){
  //           buyBtn.addEventListener('click',showBuyTickets)
  //       }

  //       modalClose.addEventListener('click',removeBuyTickets)
  //       modal.addEventListener('click',removeBuyTickets)
  //       modalContainer.addEventListener('click',function(event){
  //           event.stopPropagation()
  //       })
  