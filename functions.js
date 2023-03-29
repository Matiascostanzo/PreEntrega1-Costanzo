let continente = "";
let pais = "";
let result = true;

function primerLetraMayuscula(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function elegirHospedaje() {
  continentes.forEach(function (continentes) {
    console.log(continentes.nombre);
  });

  // El usuario elige el continente
  let hospedaje = prompt("Elegir continente").trim().toLowerCase();

  if (
    hospedaje != "a" &&
    hospedaje != "b" &&
    hospedaje != "c" &&
    hospedaje != "d" &&
    hospedaje != "e"
  ) {
    // Si el hospedaje elegido es distinto a cualquier opcion válida, el usuario será solicitado para ingresarlo de nuevo
    alert("Elegir una opcion válida");
    hospedaje = prompt("Elegir continente").trim().toLowerCase();
    while (
      //Hasta que elija una opcion válida seguirá pidiendo que el usuario elija una opción
      hospedaje != "a" &&
      hospedaje != "b" &&
      hospedaje != "c" &&
      hospedaje != "d" &&
      hospedaje != "e"
    ) {
      alert("Elegir una opcion válida");
      hospedaje = prompt("Elegir continente").trim().toLowerCase();
    }
    //Dependiendo la opcion que hayamos elegido nos informara por consola la opción de continente  elegida
    switch (hospedaje) {
      case "a":
        continente = "América";
        console.log("Elegíste " + continente);

        break;

      case "b":
        continente = "Asia";
        console.log("Elegíste " + continente);

        break;

      case "c":
        continente = "África";
        console.log("Elegíste " + continente);

        break;

      case "d":
        continente = "Europa";
        console.log("Elegíste " + continente);

        break;

      case "e":
        continente = "Oceanía";
        console.log("Elegíste " + continente);

        break;
    }

    switch (hospedaje) {
      //Nos consulta que país queremos visitar  de dicho continente elegido
      case "a":
        continentes.forEach(function (continentes) {
          if (cont.nombre === "A: América") {
            continentes.paises.forEach(function (paises) {
              console.log(paises);
            });
          }
        });

        pais = prompt("¿Qué país de América quieres visitar?");
        pais = primerLetraMayuscula(pais);
        while (!america.includes(pais)) {
          alert("Debes ingresar un país válido de America.");
          pais = prompt("¿Qué país de América quieres visitar?");
          pais = primerLetraMayuscula(pais);
        }
        result = confirm("Elegiste " + pais + " ");
        break;

      case "b":
        console.log(asia);
        pais = prompt("¿Qué país de Asia quieres visitar?");
        pais = primerLetraMayuscula(pais);
        while (!asia.includes(pais)) {
          alert("Debes ingresar un país válido de Asia.");
          pais = prompt("¿Qué país de Asia quieres visitar?");
          pais = primerLetraMayuscula(pais);
        }
        result = confirm("Elegiste " + pais + " ");
        break;

      case "c":
        console.log(africa);
        pais = prompt("¿Qué país de África quieres visitar?");
        pais = primerLetraMayuscula(pais);
        while (!africa.includes(pais)) {
          alert("Debes ingresar un país válido de África.");
          pais = prompt("¿Qué país de Africa quieres visitar?");
          pais = primerLetraMayuscula(pais);
        }
        result = confirm("Elegiste " + pais + " ");
        break;

      case "d":
        console.log(europa);
        pais = prompt("¿Qué país de Europa quieres visitar?");
        pais = primerLetraMayuscula(pais);
        while (!europa.includes(pais)) {
          alert("Debes ingresar un país válido de Europa.");
          pais = prompt("¿Qué país de Europa quieres visitar?");
          pais = primerLetraMayuscula(pais);
        }
        result = confirm("Elegiste " + pais + " ");
        break;

      case "e":
        console.log(oceania);
        pais = prompt("¿Qué país de Oceanía quieres visitar?");
        pais = primerLetraMayuscula(pais);
        while (!oceania.includes(pais)) {
          alert("Debes ingresar un país válido de Oceanía.");
          pais = prompt("¿Qué país de Oceanía  quieres visitar?");
          pais = primerLetraMayuscula(pais);
        }
        result = confirm("Elegiste " + pais + " ");
        break;
    }
  } else {
    //Dependiendo la opcion que hayamos elegido nos informara por consola la opción de continente  elegida
    switch (hospedaje) {
      case "a":
        continente = "América";
        console.log("Elegíste " + continente);
        break;

      case "b":
        continente = "Asia";
        console.log("Elegíste " + continente);

        break;

      case "c":
        continente = "África";
        console.log("Elegíste " + continente);

        break;

      case "d":
        continente = "Europa";
        console.log("Elegíste " + continente);

        break;

      case "e":
        continente = "Oceanía";
        console.log("Elegíste " + continente);

        break;
    }

    switch (hospedaje) {
      //Nos consulta que país queremos visitar  de dicho continente elegido
      case "a":
        continentes.forEach(function (continentes) {
          console.log("Elegí que país queres visitar");
          ("\n");
          if (continentes.nombre === "A: América") {
            continentes.paises.forEach(function (paises) {
              console.log(paises);
            });
          }
        });

        pais = prompt("¿Qué país de América quieres visitar?");
        pais = primerLetraMayuscula(pais);
        while (!america.includes(pais)) {
          alert("Debes ingresar un país válido de America.");
          pais = prompt("¿Qué país de América quieres visitar?");
          pais = primerLetraMayuscula(pais);
        }
        result = confirm("Elegiste " + pais + " ");
        break;

      case "b":
        console.log(asia);
        pais = prompt("¿Qué país de Asia quieres visitar?");
        pais = primerLetraMayuscula(pais);
        while (!asia.includes(pais)) {
          alert("Debes ingresar un país válido de Asia.");
          pais = prompt("¿Qué país de Asia quieres visitar?");
          pais = primerLetraMayuscula(pais);
        }
        result = confirm("Elegiste " + pais + " ");
        break;

      case "c":
        console.log(africa);
        pais = prompt("¿Qué país de África quieres visitar?");
        pais = primerLetraMayuscula(pais);
        while (!africa.includes(pais)) {
          alert("Debes ingresar un país válido de África.");
          pais = prompt("¿Qué país de Africa quieres visitar?");
          pais = primerLetraMayuscula(pais);
        }
        result = confirm("Elegiste " + pais + " ");
        break;

      case "d":
        console.log(europa);
        pais = prompt("¿Qué país de Europa quieres visitar?");
        pais = primerLetraMayuscula(pais);
        while (!europa.includes(pais)) {
          alert("Debes ingresar un país válido de Europa.");
          pais = prompt("¿Qué país de Europa quieres visitar?");
          pais = primerLetraMayuscula(pais);
        }
        result = confirm("Elegiste " + pais + " ");
        break;

      case "e":
        console.log(oceania);
        pais = prompt("¿Qué país de Oceanía quieres visitar?");
        pais = primerLetraMayuscula(pais);
        while (!oceania.includes(pais)) {
          alert("Debes ingresar un país válido de Oceanía.");
          pais = prompt("¿Qué país de Oceanía  quieres visitar?");
          pais = primerLetraMayuscula(pais);
        }
        result = confirm("Elegiste " + pais + " ");
        break;
    }
  }
}
