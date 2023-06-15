const input = document.querySelector("#inputText");
const btnencriptar = document.querySelector("#encriptar");
const btndesencriptar = document.querySelector("#desencriptar");
const result = document.querySelector("#resultText");
const btncopiar = document.querySelector("#copy");
const btnlimpiar = document.querySelector("#limpiar");
const light = document.querySelector("#light");
const dark = document.querySelector("#dark");
const rst = document.querySelector("#rst");
const header = document.querySelector("#header");

if(localStorage.getItem('theme') == 'true'){
  darkMode()
}


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

function darkMode() {
  document.body.classList.add("dark:bg-slate-800");
  document.body.classList.add("activado");
  input.classList.add("dark:bg-slate-800");
  input.classList.add("dark:text-stone-200");
  result.classList.add("dark:bg-slate-900");
  rst.classList.add("dark:bg-slate-900");
  result.classList.add("dark:text-stone-200");
  header.classList.add("brightness-90");
  btndesencriptar.classList.add("dark:bg-slate-400");
  btndesencriptar.classList.add("dark:text-slate-900");
  btncopiar.classList.add("dark:text-slate-900");
  btncopiar.classList.add("dark:bg-slate-400");
  dark.classList.toggle('hidden')
  light.classList.toggle('hidden')
}

function lightMode() {
  document.body.classList.remove("activado");
  document.body.classList.remove("dark:bg-slate-800");
  input.classList.remove("dark:bg-slate-800");
  input.classList.remove("dark:text-stone-200");
  result.classList.remove("dark:bg-slate-900");
  rst.classList.remove("dark:bg-slate-900");
  result.classList.remove("dark:text-stone-200");
  header.classList.remove("brightness-90");
  btndesencriptar.classList.remove("dark:bg-slate-400");
  btndesencriptar.classList.remove("dark:text-slate-900");
  btncopiar.classList.remove("dark:text-slate-900");
  btncopiar.classList.remove("dark:bg-slate-400");
  dark.classList.toggle('hidden')
  light.classList.toggle('hidden')
}

dark.addEventListener("click", () => {
  console.log('xd')
  lightMode();
  if (document.body.classList.contains("activado")) {
    localStorage.setItem("theme", "true");
  } else {
    localStorage.setItem("theme", "false");
  }
});

light.addEventListener("click", () => {
  console.log('dx')
  darkMode();
  if (document.body.classList.contains("activado")) {
    localStorage.setItem("theme", "true");
  } else {
    localStorage.setItem("theme", "false");
  }
});

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
  if (result.value.length > 0) {
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
