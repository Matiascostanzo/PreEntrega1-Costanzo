let continente = "";

function elegirHospedaje() {
  console.log(
    "Opciones de continentes: \n A: América\n B: Asia \n C: África \n D: Europa \n E: Oceanía "
  );
  let hospedaje = prompt("Elegir continente").trim().toLowerCase();

  if (
    hospedaje != "a" &&
    hospedaje != "b" &&
    hospedaje != "c" &&
    hospedaje != "d" &&
    hospedaje != "e"
  ) {
    alert("Elegir una opcion válida");
    hospedaje = prompt("Elegir continente").trim().toLowerCase();
    while (
      hospedaje != "a" &&
      hospedaje != "b" &&
      hospedaje != "c" &&
      hospedaje != "d" &&
      hospedaje != "e"
    ) {
      alert("Elegir una opcion válida");
      hospedaje = prompt("Elegir continente").trim().toLowerCase();
    }
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
  } else {
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
  }
}
