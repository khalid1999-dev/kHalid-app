let loginForm = document.querySelector(".login-form");
function showform() {
  loginForm.classList.add("active");
}
function hideform() {
  loginForm.classList.remove("active");
}
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".container img");
  let index = 0;

  function showNextImage() {
    images.forEach((img) => (img.style.opacity = "0")); // إخفاء كل الصور
    images[index].style.opacity = "1"; // إظهار الصورة الحالية

    index = (index + 1) % images.length; // الانتقال للصورة التالية

    setTimeout(showNextImage, 4000); // تغيير الصورة كل 2 ثانية
  }

  showNextImage(); // تشغيل الوظيفة عند تحميل الصفحة
});

let menuBar = document.querySelector("#menu-bar");
let amenu = document.querySelector(".link");
function toggleMenu() {
  menuBar = document.querySelector("fa-times");
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}
 /*-----------------------------------------
 -------------------------------------------
 -----------------------------------------*/
 