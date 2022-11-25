let username = document.getElementById("nameinput");
let email = document.getElementById("form3Example3");
let password = document.getElementById("form3Example4");
let repassword = document.getElementById("form3Example4d");
let btnLogin = document.querySelector(".js-login-button");
let countCustomer=JSON.parse(localStorage.getItem('countCustomer'))
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    password: password.value,
  };
  let json = JSON.stringify(user);
  if (!username.value || !email.value || !password.value || !repassword.value) {
    alert("Vui lòng nhập đầy đủ thông tin");
  } else {
    if (email.value.indexOf('@gmail.com')==-1)
      alert("Email không hợp lệ")
    else{
      if (password.value != repassword.value)
        alert("Mật khẩu không khớp");
      else{
        localStorage.setItem(username.value, json);
        localStorage.setItem('countCustomer', countCustomer+1);
        alert("Đăng ký thành công");
        window.location.href="login.html";
      }
      }
  }
});
