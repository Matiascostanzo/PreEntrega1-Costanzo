let continente = "";
let pais = "";
let result = true;

function elegirHospedaje() {
  console.log(
    "Opciones de continentes: \n A: América\n B: Asia \n C: África \n D: Europa \n E: Oceanía "
  );
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
        pais = prompt("¿Qué país de América quieres visitar?");
        result = confirm("¿Elegiste " + pais + " ?");
        break;

      case "b":
        pais = prompt("¿Qué país de Asia quieres visitar?");
        result = confirm("¿Elegiste " + pais + " ?");
        break;

      case "c":
        pais = prompt("¿Qué país de África quieres visitar?");
        result = confirm("¿Elegiste " + pais + " ?");
        break;

      case "d":
        pais = prompt("¿Qué país de Europa quieres visitar?");
        result = confirm("¿Elegiste " + pais + " ?");
        break;

      case "e":
        pais = prompt("¿Qué país de Oceanía quieres visitar?");
        result = confirm("¿Elegiste " + pais + " ?");
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
        pais = prompt("¿Qué país de América quieres visitar?");
        result = confirm("¿Elegiste " + pais + " ?");
        break;

      case "b":
        pais = prompt("¿Qué país de Asia quieres visitar?");
        result = confirm("¿Elegiste " + pais + " ?");
        break;

      case "c":
        pais = prompt("¿Qué país de África quieres visitar?");
        result = confirm("¿Elegiste " + pais + " ?");
        break;

      case "d":
        pais = prompt("¿Qué país de Europa quieres visitar?");
        result = confirm("¿Elegiste " + pais + " ?");
        break;

      case "e":
        pais = prompt("¿Qué país de Oceanía quieres visitar?");
        result = confirm("¿Elegiste " + pais + " ?");
        break;
    }
  }
}
