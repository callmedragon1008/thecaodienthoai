// login
let btnLogin = document.querySelector('#js-login-button');
let username = document.getElementById('form3Example3');
let password = document.getElementById('form3Example4');
let temp=localStorage.getItem('product')
let product=JSON.parse(temp)
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    password: password.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  if (!username.value || !password.value) {
    alert("Vui lòng nhập đầy đủ thông tin");
  }
  else{
    if (username.value=="admin"&&password.value=="123"){
      alert("Xin chào admin đẹp trai:)");
      window.location.href = "admin.html"
    }
    else
      if (localStorage.getItem(username.value) == json) {
        alert("Đăng nhập thành công")
        for (let i=0;i<product.length;i++){
          product[i].inCart=0
      }
        var json1=JSON.stringify(product)
        localStorage.setItem('product',json1)
        localStorage.setItem('username1',username.value)
        localStorage.setItem('status',1)
        localStorage.setItem('numberCart1',0)
        window.location.href = "index.html";
      
      } else {
        alert("Đăng nhập thất bại");
      }
    }
});