const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "atras") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "igual") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "igual") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".variar-tema");
const calculator = document.querySelector(".calculadora");
const toggleIcon = document.querySelector(".variar-icono");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("oscuro");
  themeToggleBtn.classList.toggle("activar");
  isDark = !isDark;
};
