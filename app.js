const boton = document.querySelector(".ingresar");
const toast = document.querySelector(".toast");
function resultado(min, max) {
  let num = Math.round(Math.random() * (max - min) + min);
  return num;
}

boton.addEventListener("click", () => {
  boton.disabled = true;
  const rst = resultado(1, 10);
  console.log(rst)
  if (rst % 2 == 0) {
    toast.style.background = "#A5DC86";
    toast.innerText = "Usuario encontrado";
  } else {
    toast.innerText = "Usuario no registrado";
    toast.style.background = "salmon";
  }
  toast.style.display = "block";
  toast.style.animation = "aparecer 1s forwards";

  setTimeout(() => {
    toast.style.animation = "desaparecer 1s forwards";
    setTimeout(() => {
      toast.style.display = "none";
    }, 1000);
    boton.disabled = false;
  }, 2000);
});
