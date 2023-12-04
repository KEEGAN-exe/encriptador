const input = document.querySelector("#inputText");
const btnencriptar = document.querySelector("#encriptar");
const btndesencriptar = document.querySelector("#desencriptar");
const result = document.querySelector("#resultText");
const btncopiar = document.querySelector("#copy");
const btnlimpiar = document.querySelector("#limpiar");

let encriptedWords = [];
let lastEncriptedText = null;

function alerta(icono, message) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 2000,
  });

  Toast.fire({
    icon: icono,
    title: message,
  });
  input.focus();
}

btnencriptar.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue.length > 0) {
    let formatValue = inputValue.toLowerCase()
    let changeText = formatValue
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    encriptedWords.push(inputValue + " -> " + changeText);
    lastEncriptedText = changeText;
    result.style.justifyContent = "start";
    result.innerHTML = "";
    result.innerHTML =
      "<span class='format-text'>Historial de palabras:</span>";
    encriptedWords.forEach((n, i) => {
      result.innerHTML += i + 1 + " " + n + "<br>";
    });
    clearInputText();
  } else {
    alerta("error", "Debe ingresar un texto");
  }
});

btndesencriptar.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue.length > 0) {
    let formatValue = inputValue.toLowerCase()
    let changeText = formatValue
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    result.style.justifyContent = "start";
    encriptedWords.push(inputValue + " -> " + changeText);
    lastEncriptedText = changeText;
    result.innerHTML = "";
    result.innerHTML =
      "<span class='format-text'>Historial de palabras:</span>";
    encriptedWords.forEach((n, i) => {
      result.innerHTML += i + 1 + " " + n + "<br>";
    });
    clearInputText();
  } else {
    alerta("error", "Debe ingresar un texto");
  }
});

btncopiar.addEventListener("click", () => {
  if (encriptedWords.length > 0) {
    alerta("success", "Texto copiado");
    navigator.clipboard.writeText(lastEncriptedText);
  } else {
    alerta("error", "Debe encriptar o desencriptar algun texto primero");
  }
});

function clearInputText() {
  input.value = "";
  input.focus();
}
