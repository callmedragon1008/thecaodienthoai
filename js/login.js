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
let btnLogin = document.querySelector('#js-login-button');
let username = document.getElementById('form3Example3');
let password = document.getElementById('form3Example4');
let headerLogin=document.querySelectorAll('.header-account');
let headerUser=document.querySelector('.header-user');
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    password: password.value,
  };
  console.log(user);
  let json = JSON.stringify(user);
  if (!username.value || !password.value) {
    alert("vui long nhap day du thong tin");
  }
  else{
    if (username.value=="admin"&&password.value=="123"){
      alert("Xin chao admin");
      window.location.href = "admin.html";
    }
    else
      if (localStorage.getItem(username.value) == json) {
        alert("Dang nhap thanh cong");
        window.location.href = "index.html";
        headerLogin.classList.add('disappear')
        headerUser.classList.remove('disappear')
        document.getElementsByClassName(header-user).innerText=username.value
      } else {
        alert("Dang nhap that bai");
      }
    }
});
