let continente = "";
let destinoElegido = "";
let result = true;
let destinoEncontrado = false;
let eleccion = "";
let destinoSeleccionado = "";
let compras = [];
const continentesPosibles = {
  1: "Elegiste America",
  2: "Elegiste Asia",
  3: "Elegiste Africa",
  4: "Elegiste Europa",
  5: "Elegiste Oceania",
};

const continenteInvalido = "Elije un continente válido";

function primerLetraMayuscula(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function elegirExcursion() {
  continentes.forEach(function (continentes) {
    console.log(`Código: ${continentes.codigo}, Nombre: ${continentes.nombre}`);
  });

  // El usuario elige el continente
  let hospedaje = prompt("Elegir codigo de continente");

  if (
    hospedaje != "1" &&
    hospedaje != "2" &&
    hospedaje != "3" &&
    hospedaje != "4" &&
    hospedaje != "5"
  ) {
    // Si el hospedaje elegido es distinto a cualquier opcion válida, el usuario será solicitado para ingresarlo de nuevo
    alert("Elegir una opcion válida");
    hospedaje = prompt("Elegir continente");

    while (
      //Hasta que elija una opcion válida seguirá pidiendo que el usuario elija una opción
      hospedaje != "1" &&
      hospedaje != "2" &&
      hospedaje != "3" &&
      hospedaje != "4" &&
      hospedaje != "5"
    ) {
      alert("Elegir una opcion válida");
      hospedaje = prompt("Elegir continente");
    }
  }

  if (
    hospedaje == "1" ||
    hospedaje == "2" ||
    hospedaje == "3" ||
    hospedaje == "4" ||
    hospedaje == "5"
  ) {
    eleccion = continentesPosibles[hospedaje] || continenteInvalido;
    console.log(eleccion);

    switch (hospedaje) {
      //Nos consulta que país queremos visitar  de dicho continente elegido
      case "1":
        console.log("Lista de destinos de America disponibles \n");
        continentes.forEach(function (destino) {
          if (destino.codigo == "1") {
            continenteSeleccionado = destino.nombre;
            destino.destinos.forEach(function (destinos) {
              console.log(destinos);
            });
          }
        });

        do {
          paisEncontrado = false;
          destinoElegido = prompt("¿Qué destino de América quieres visitar?");
          destinoElegido = primerLetraMayuscula(destinoElegido);

          // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
          continentes.forEach(function (destino) {
            if (destino.codigo == "1") {
              destino.destinos.forEach(function (elegido) {
                if (elegido === destinoElegido) {
                  destinoEncontrado = true;
                  destinoSeleccionado = destino.nombre;
                }
              });
            }
          });

          // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
          if (!destinoEncontrado) {
            console.log(
              `Lo siento, ${destinoElegido} no es un destino válido en América.`
            );
          }
        } while (!destinoEncontrado);

        console.log(
          `¡Excelente elección! Quieres visitar ${destinoElegido} en ${destinoSeleccionado}.`
        );
        break;

      case "2":
        console.log("Lista de destinos de Asia disponibles \n");
        continentes.forEach(function (destino) {
          if (destino.codigo == "2") {
            continenteSeleccionado = destino.nombre;
            destino.destinos.forEach(function (destinos) {
              console.log(destinos);
            });
          }
        });

        do {
          paisEncontrado = false;
          destinoElegido = prompt("¿Qué destino de América quieres visitar?");
          destinoElegido = primerLetraMayuscula(destinoElegido);

          // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
          continentes.forEach(function (destino) {
            if (destino.codigo == "2") {
              destino.destinos.forEach(function (elegido) {
                if (elegido === destinoElegido) {
                  destinoEncontrado = true;
                  destinoSeleccionado = destino.nombre;
                }
              });
            }
          });

          // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
          if (!destinoEncontrado) {
            console.log(
              `Lo siento, ${destinoElegido} no es un destino válido en Asia.`
            );
          }
        } while (!destinoEncontrado);

        console.log(
          `¡Excelente elección! Quieres visitar ${destinoElegido} en ${destinoSeleccionado}.`
        );
        break;

      case "3":
        console.log("Lista de destinos de Africa disponibles \n");
        continentes.forEach(function (destino) {
          if (destino.codigo == "3") {
            continenteSeleccionado = destino.nombre;
            destino.destinos.forEach(function (destinos) {
              console.log(destinos);
            });
          }
        });

        do {
          paisEncontrado = false;
          destinoElegido = prompt("¿Qué destino de Africa quieres visitar?");
          destinoElegido = primerLetraMayuscula(destinoElegido);

          // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
          continentes.forEach(function (destino) {
            if (destino.codigo == "3") {
              destino.destinos.forEach(function (elegido) {
                if (elegido === destinoElegido) {
                  destinoEncontrado = true;
                  destinoSeleccionado = destino.nombre;
                }
              });
            }
          });

          // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
          if (!destinoEncontrado) {
            console.log(
              `Lo siento, ${destinoElegido} no es un destino válido en Africa.`
            );
          }
        } while (!destinoEncontrado);

        console.log(
          `¡Excelente elección! Quieres visitar ${destinoElegido} en ${destinoSeleccionado}.`
        );
        break;

      case "4":
        console.log("Lista de destinos de Europa disponibles \n");
        continentes.forEach(function (destino) {
          if (destino.codigo == "4") {
            continenteSeleccionado = destino.nombre;
            destino.destinos.forEach(function (destinos) {
              console.log(destinos);
            });
          }
        });

        do {
          paisEncontrado = false;
          destinoElegido = prompt("¿Qué destino de Europa quieres visitar?");
          destinoElegido = primerLetraMayuscula(destinoElegido);

          // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
          continentes.forEach(function (destino) {
            if (destino.codigo == "4") {
              destino.destinos.forEach(function (elegido) {
                if (elegido === destinoElegido) {
                  destinoEncontrado = true;
                  destinoSeleccionado = destino.nombre;
                }
              });
            }
          });

          // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
          if (!destinoEncontrado) {
            console.log(
              `Lo siento, ${destinoElegido} no es un destino válido en Europa.`
            );
          }
        } while (!destinoEncontrado);

        console.log(
          `¡Excelente elección! Quieres visitar ${destinoElegido} en ${destinoSeleccionado}.`
        );
        break;

      case "5":
        console.log("Lista de destinos de Oceania disponibles \n");
        continentes.forEach(function (destino) {
          if (destino.codigo == "5") {
            continenteSeleccionado = destino.nombre;
            destino.destinos.forEach(function (destinos) {
              console.log(destinos);
            });
          }
        });

        do {
          paisEncontrado = false;
          destinoElegido = prompt("¿Qué destino de Oceania quieres visitar?");
          destinoElegido = primerLetraMayuscula(destinoElegido);

          // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
          continentes.forEach(function (destino) {
            if (destino.codigo == "5") {
              destino.destinos.forEach(function (elegido) {
                if (elegido === destinoElegido) {
                  destinoEncontrado = true;
                  destinoSeleccionado = destino.nombre;
                }
              });
            }
          });

          // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
          if (!destinoEncontrado) {
            console.log(
              `Lo siento, ${destinoElegido} no es un destino válido en Oceania.`
            );
          }
        } while (!destinoEncontrado);

        console.log(
          `¡Excelente elección! Quieres visitar ${destinoElegido} en ${destinoSeleccionado}.`
        );
        break;
    }
  }
}
