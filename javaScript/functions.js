let continente = "";
let pais = "";
let result = true;
let paisEncontrado = false;
let eleccion = "";
let continenteSeleccionado = "";
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
          pais = prompt("¿Qué país de América quieres visitar?");
          pais = primerLetraMayuscula(pais);

          // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
          continentes.forEach(function (continente) {
            if (continente.codigo == "1") {
              continente.paises.forEach(function (paisContinente) {
                if (paisContinente === pais) {
                  paisEncontrado = true;
                  continenteSeleccionado = continente.nombre;
                }
              });
            }
          });

          // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
          if (!paisEncontrado) {
            continenteSeleccionado = continente.nombre;
            console.log(`Lo siento, ${pais} no es un país válido en America .`);
          }
        } while (!paisEncontrado);
        {
          console.log(
            `¡Excelente elección! Quieres visitar ${pais} en ${continenteSeleccionado}.`
          );

          break;
        }

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
          pais = prompt("¿Qué país de Asia quieres visitar?");
          pais = primerLetraMayuscula(pais);

          // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
          continentes.forEach(function (continente) {
            if (continente.codigo == "2") {
              continente.paises.forEach(function (paisContinente) {
                if (paisContinente === pais) {
                  paisEncontrado = true;
                  continenteSeleccionado = continente.nombre;
                }
              });
            }
          });

          // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
          if (!paisEncontrado) {
            console.log(`Lo siento, ${pais} no es un país válido en Asia.`);
          }
        } while (!paisEncontrado);
        {
          console.log(
            `¡Excelente elección! Quieres visitar ${pais} en ${continenteSeleccionado}.`
          );
          break;
        }

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
          pais = prompt("¿Qué país de Africa quieres visitar?");
          pais = primerLetraMayuscula(pais);

          // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
          continentes.forEach(function (continente) {
            if (continente.codigo == "3") {
              continente.paises.forEach(function (paisContinente) {
                if (paisContinente === pais) {
                  paisEncontrado = true;
                  continenteSeleccionado = continente.nombre;
                }
              });
            }
          });

          // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
          if (!paisEncontrado) {
            console.log(`Lo siento, ${pais} no es un país válido en Africa.`);
          }
        } while (!paisEncontrado);
        {
          console.log(
            `¡Excelente elección! Quieres visitar ${pais} en ${continenteSeleccionado}.`
          );
          break;
        }

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
          pais = prompt("¿Qué país de Europa quieres visitar?");
          pais = primerLetraMayuscula(pais);

          // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
          continentes.forEach(function (continente) {
            if (continente.codigo == "4") {
              continente.paises.forEach(function (paisContinente) {
                if (paisContinente === pais) {
                  paisEncontrado = true;
                  continenteSeleccionado = continente.nombre;
                }
              });
            }
          });

          // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
          if (!paisEncontrado) {
            console.log(`Lo siento, ${pais} no es un país válido en Europa.`);
          }
        } while (!paisEncontrado);
        {
          console.log(
            `¡Excelente elección! Quieres visitar ${pais} en ${continenteSeleccionado}.`
          );
          break;
        }

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
          pais = prompt("¿Qué país de Oceania quieres visitar?");
          pais = primerLetraMayuscula(pais);

          // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
          continentes.forEach(function (continente) {
            if (continentes.codigo == "5") {
              continente.paises.forEach(function (paisContinente) {
                if (paisContinente === pais) {
                  paisEncontrado = true;
                  continenteSeleccionado = continente.nombre;
                }
              });
            }
          });

          // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
          if (!paisEncontrado) {
            console.log(`Lo siento, ${pais} no es un país válido en Oceania.`);
          }
        } while (!paisEncontrado);
        {
          console.log(
            `¡Excelente elección! Quieres visitar ${pais} en ${continenteSeleccionado}.`
          );
          break;
        }
    }
  }
}
