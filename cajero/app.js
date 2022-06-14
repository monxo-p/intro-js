/*
function atmUsername() {
  let username = document.getElementById("nombre").value;
  document.getElementById("bankNombre").innerHTML = username;
}
*/

// evento de enter global
// document.getElementById("miBoton").onclick = atmUsername();

//si presiona el boton
//document.getElementById("miBoton").addEventListener("click", atmUsername);

// var input = document.getElementById("myInput");
// input.addEventListener("keyup", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.getElementById("miBoton").click();
//   }
// });

var correct_pass = /^[0-9]{4}$/;

function inicio() {
  alert("Bienvenido a tu cajero");
  //si presiona enter
  let input = document.getElementById("myInput");
  input.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
      atmUsername();
    }
  });
}

function atmUsername() {
  let username = document.getElementById("myInput").value;
  if (username == "Gali" || username == "gali" || username == "1") {
    alert("Usuario correcto");
    gali();
  } else if (username == "Junior" || username == "junior" || username == "2") {
    alert("Usuario correcto");
    junior();
  } else if (
    username == "Chanclas" ||
    username == "chanclas" ||
    username == "3"
  ) {
    alert("Usuario correcto");
    chanclas();
  } else {
    alert("Error, vuelva a intentarlo");
  }
}

function gali() {
  //prompt("hola");
  document.getElementById("bankNombre").innerHTML = "Gali";
  document.getElementById("informacion").innerHTML = "Digita tu pin";
  document.getElementById("perfil1").innerHTML = null;
  document.getElementById("perfil2").innerHTML = null;
  document.getElementById("perfil3").innerHTML = null;
  document.getElementById("perfil4").innerHTML = null;
  //si presiona enter
  let input = document.getElementById("myInput");
  input.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
      checkGali();
    }
  });
}

function junior() {
  //prompt("hola");
  document.getElementById("bankNombre").innerHTML = "Junior";
  document.getElementById("informacion").innerHTML = "Digita tu pin";
  document.getElementById("perfil1").innerHTML = null;
  document.getElementById("perfil2").innerHTML = null;
  document.getElementById("perfil3").innerHTML = null;
  document.getElementById("perfil4").innerHTML = null;
  //si presiona enter
  let input = document.getElementById("myInput");
  input.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
      checkJunior();
    }
  });
}

function chanclas() {
  //prompt("hola");
  document.getElementById("bankNombre").innerHTML = "Chanclas";
  document.getElementById("informacion").innerHTML = "Digita tu pin";
  document.getElementById("perfil1").innerHTML = null;
  document.getElementById("perfil2").innerHTML = null;
  document.getElementById("perfil3").innerHTML = null;
  document.getElementById("perfil4").innerHTML = null;
  //si presiona enter
  let input = document.getElementById("myInput");
  input.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
      checkChanclas();
    }
  });
}

function checkGali() {
  let pin = document.getElementById("myInput").value;
  if (correct_pass.test(pin)) {
    alert("Pin correcto");
    eligeGali();
  }
}

function checkJunior() {
  let pin = document.getElementById("myInput").value;
  if (correct_pass.test(pin)) {
    alert("Pin correcto");
    eligeJunior();
  }
}

function checkChanclas() {
  let pin = document.getElementById("myInput").value;
  if (correct_pass.test(pin)) {
    alert("Pin correcto");
    eligeChanclas();
  }
}

function eligeGali() {
  //alert("elige una opcion bebe");
  document.getElementById("bankNombre").innerHTML = "Cuenta de Gali";
  document.getElementById("informacion").innerHTML = "Elige una opción:";
  document.getElementById("perfil1").innerHTML = "1- Consulta tu saldo";
  document.getElementById("perfil2").innerHTML = "2- Depositar monto";
  document.getElementById("perfil3").innerHTML = "3- Retirar monto";
  document.getElementById("perfil4").innerHTML = "4- Salir";
  //si presiona enter
  let input = document.getElementById("myInput");
  input.addEventListener("keyup", ({ key }) => {
    if (key == "1") {
      alert("Procesando...");
      saldoGali();
    }
  });
}

function saldoGali() {
  document.getElementById("bankNombre").innerHTML = "Tu saldo es:";
  document.getElementById("informacion").innerHTML = "dinero1";
  document.getElementById("perfil1").innerHTML = null;
  document.getElementById("perfil2").innerHTML = null;
  document.getElementById("perfil3").innerHTML = null;
  document.getElementById("perfil4").innerHTML = "4- Regresar";
  let input = document.getElementById("myInput");
  input.addEventListener("keyup", ({ key }) => {
    if (key === "4") {
      alert("Espere...");
      eligeGali();
    } else if (key !== "4") {
      alert("Elija una opción correcta");
    }
  });
}

function eligeJunior() {
  //alert("elige una opcion bebe");
  document.getElementById("bankNombre").innerHTML = "Cuenta de Junior";
  document.getElementById("informacion").innerHTML = "Elige una opción:";
  document.getElementById("perfil1").innerHTML = "1- Consulta tu saldo";
  document.getElementById("perfil2").innerHTML = "2- Depositar monto";
  document.getElementById("perfil3").innerHTML = "3- Retirar monto";
  document.getElementById("perfil4").innerHTML = "4- Salir";
}

function eligeChanclas() {
  //alert("elige una opcion bebe");
  document.getElementById("bankNombre").innerHTML = "Cuenta de Chanclas";
  document.getElementById("informacion").innerHTML = "Elige una opción:";
  document.getElementById("perfil1").innerHTML = "1- Consulta tu saldo";
  document.getElementById("perfil2").innerHTML = "2- Depositar monto";
  document.getElementById("perfil3").innerHTML = "3- Retirar monto";
  document.getElementById("perfil4").innerHTML = "4- Salir";
}
