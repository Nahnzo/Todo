const addButton = document.querySelector(".add");
const text = document.querySelector(".input");
const out = document.querySelector(".text");
const remove = document.querySelector(".remove");
const dela = document.querySelector(".out");
let step = 1;

dela.innerHTML = "Незаконченные дела : " + 0;
addButton.addEventListener("click", () => {
  if (text.value == "") {
    step--;
    alert("Добавьте дело");
  }
  out.innerHTML += "<br>" + text.value;
  dela.innerHTML = "Незаконченные дела : " + step++;
  setTimeout(() => {
    text.value = "";
  }, 1500);
  if (out.textContent == "") {
    dela.innerHTML = "Незаконченные дела : " + 0;
    step--;
  }
});

remove.addEventListener("click", () => {
  out.innerHTML = "";
  dela.innerHTML = "Незаконченные дела : " + 0;
});
