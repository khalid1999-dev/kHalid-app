function updateClock() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0"); // الساعات بصيغة 00
  let minutes = now.getMinutes().toString().padStart(2, "0"); // الدقائق بصيغة 00
  let seconds = now.getSeconds().toString().padStart(2, "0"); // الثواني بصيغة 00

  let timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
}

// تحديث الساعة كل ثانية
setInterval(updateClock, 1000);

// تشغيل الساعة عند تحميل الصفحة
updateClock();
