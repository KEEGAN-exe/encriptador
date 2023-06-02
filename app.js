const input = document.querySelector("#inputText");
const btnencriptar = document.querySelector("#encriptar");
const btndesencriptar = document.querySelector("#desencriptar");
const result = document.querySelector("#resultText");
const btncopiar = document.querySelector("#copy");
const btnlimpiar = document.querySelector("#limpiar");

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
    let changeText = inputValue
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    result.innerHTML = changeText;
  } else {
    alerta("error", "Debe ingresar un texto");
  }
});

btndesencriptar.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue.length > 0) {
    let changeText = inputValue
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    result.innerHTML = changeText;
  }else{
    alerta("error", "Debe ingresar un texto");
  }
});

btncopiar.addEventListener("click", () => {
  if (result.length > 0) {
    alerta("success", "Texto copiado");

    let resultValue = result.value;
    navigator.clipboard.writeText(resultValue);
  } else {
    alerta("error", "Debe encriptar o desencriptar algun texto primero");
  }
});

btnlimpiar.addEventListener("click", () => {
  input.focus();
  input.value = "";
});
