
import randomstring from "randomstring";
import "./style.scss"
console.log(randomstring.generate(10))

var registrationForm = document.getElementById("registrationForm");
var loginForm = document.getElementById("loginForm");
document.getElementById("btnRegistration").addEventListener("click", function() {
  registrationForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

document.getElementById("btnLogin").addEventListener("click", function() {
  registrationForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

document.getElementById("btnRegister").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var login = document.getElementById("login").value;
  var password = document.getElementById("password").value;

  var user = {
    name: name,
    login: login,
    password: password
  };

  // Зберегти користувача в localStorage
  var users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  // Скинути форму реєстрації
  registrationForm.reset();
  alert("Реєстрація успішна!");
});

document.getElementById("btnLoginSubmit").addEventListener("click", function() {
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  // Пошук користувача в localStorage
  var users = JSON.parse(localStorage.getItem("users")) || [];
  var loggedInUser = users.find(function(user) {
    return user.login === username && user.password === password;
  });

  if (loggedInUser) {
    // Користувач знайдений, робимо потрібні дії
    alert("Вхід успішний!");
  } else {
    // Користувач не знайдений, показуємо повідомлення про помилку
    alert("Невірний логін або пароль!");
  }

  // Скинути форму входу
  loginForm.reset();
});
