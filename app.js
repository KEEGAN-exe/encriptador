const input = document.querySelector("#inputText");
const btnencriptar = document.querySelector("#encriptar");
const btndesencriptar = document.querySelector("#desencriptar");
const result = document.querySelector("#resultText");
const btncopiar = document.querySelector("#copy");
const btnlimpiar = document.querySelector("#limpiar");
const light = document.querySelector("#light");
const dark = document.querySelector("#dark");
const rst = document.querySelector("#rst")
const header = document.querySelector("#header")

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

dark.addEventListener("click", () => {
  document.body.classList.toggle('dark:bg-slate-800')
  input.classList.toggle('dark:bg-slate-800')
  input.classList.toggle('dark:text-stone-200')
  result.classList.toggle('dark:bg-slate-900')
  rst.classList.toggle('dark:bg-slate-900')
  result.classList.toggle('dark:text-stone-200')
  header.classList.toggle('brightness-90')
  btndesencriptar.classList.toggle('dark:bg-slate-400')
  btndesencriptar.classList.toggle('dark:text-slate-900')
  btncopiar.classList.toggle('dark:text-slate-900')
  btncopiar.classList.toggle('dark:bg-slate-400')
  light.classList.toggle('hidden')
  dark.classList.toggle('hidden')
});

light.addEventListener("click", () => {
  document.body.classList.toggle('dark:bg-slate-800')
  input.classList.toggle('dark:bg-slate-800')
  input.classList.toggle('dark:text-stone-200')
  result.classList.toggle('dark:bg-slate-900')
  rst.classList.toggle('dark:bg-slate-900')
  result.classList.toggle('dark:text-stone-200')
  header.classList.toggle('brightness-90')
  btndesencriptar.classList.toggle('dark:bg-slate-400')
  btndesencriptar.classList.toggle('dark:text-slate-900')
  btncopiar.classList.toggle('dark:text-slate-900')
  btncopiar.classList.toggle('dark:bg-slate-400')
  dark.classList.toggle('hidden')
  light.classList.toggle('hidden')
})

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
  } else {
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
