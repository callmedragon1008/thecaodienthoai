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
let user = {
  username: "",
  password: "",
};
let json = JSON.stringify(user);
console.log(user.username.value);
// login
let headerLogin=document.querySelector('.header-login')
let headerUser=document.querySelector('.header-user')
let btnLogin = document.querySelector('#js-login-button');
let username = document.getElementById('form3Example3');
let password = document.getElementById('form3Example4');
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    password: password.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  let json1=JSON.stringify(temp)
  if (!username.value || !password.value) {
    alert("vui long nhap day du thong tin");
  }
  else{
    if (username.value=="admin"&&password.value=="123"){
      alert("Xin chao admin");
      window.location.href = "admin.html"
    }
    else
      if (localStorage.getItem(username.value) == json) {
        alert("Dang nhap thanh cong");
        window.location.href = "index.html";
      } else {
        alert("Dang nhap that bai");
      }
    }
});