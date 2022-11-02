let username = document.getElementById("nameinput");
let email = document.getElementById("form3Example3");
let password = document.getElementById("form3Example4");
let repassword = document.getElementById("form3Example4d");
let btnLogin = document.querySelector(".js-login-button");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    password: password.value,
  };
  let json = JSON.stringify(user);
  if (!username.value || !email.value || !password.value || !repassword.value) {
    alert("Vui long nhap day du thong tin");
  } else {
    if (!password.value != !repassword.value)
      alert("Mat khau khong khop");
    localStorage.setItem(username.value, json);
    alert("Dang ky thanh cong");
    window.location.href="login.html";
  }
});
