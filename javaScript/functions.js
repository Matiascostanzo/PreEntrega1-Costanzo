let continente = "";
let pais = "";
let result = true;
let paisEncontrado = false;
let eleccion = "";
let continenteSeleccionado = "";
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
  primerLetraMayuscula(hospedaje);

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
    primerLetraMayuscula(hospedaje);
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
      primerLetraMayuscula(hospedaje);
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
        console.log("Lista de países de America disponibles \n");
        continentes.forEach(function (continentes) {
          if (continentes.codigo == "1") {
            continenteSeleccionado = continente.nombre;
            continentes.paises.forEach(function (paises) {
              console.log(paises);
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
            console.log(
              `Lo siento, ${pais} no es un país válido en ${continenteSeleccionado}.`
            );
          }
        } while (!paisEncontrado);
        {
          console.log(
            `¡Excelente elección! Quieres visitar ${pais} en ${continenteSeleccionado}.`
          );

          break;
        }

      case "2":
        console.log("Lista de países de Asia disponibles \n");
        continentes.forEach(function (continentes) {
          if (continentes.codigo == "2") {
            continentes.paises.forEach(function (paises) {
              console.log(paises);
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
                }
              });
            }
          });

          // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
          if (!paisEncontrado) {
            console.log(
              `Lo siento, ${pais} no es un país válido en ${continente}.`
            );
          }
        } while (!paisEncontrado);
        {
          console.log(
            `¡Excelente elección! Quieres visitar ${pais} en ${continente}.`
          );
          break;
        }

      case "3":
        console.log("Lista de países de Africa disponibles \n");
        continentes.forEach(function (continentes) {
          if (continentes.codigo == "3") {
            continentes.paises.forEach(function (paises) {
              console.log(paises);
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
                }
              });
            }
          });

          // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
          if (!paisEncontrado) {
            console.log(
              `Lo siento, ${pais} no es un país válido en ${continente}.`
            );
          }
        } while (!paisEncontrado);
        {
          console.log(
            `¡Excelente elección! Quieres visitar ${pais} en ${continente}.`
          );
          break;
        }

      case "4":
        console.log("Lista de países de Europa disponibles \n");
        continentes.forEach(function (continentes) {
          if (continentes.codigo == "4") {
            continentes.paises.forEach(function (paises) {
              console.log(paises);
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
                }
              });
            }
          });

          // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
          if (!paisEncontrado) {
            console.log(
              `Lo siento, ${pais} no es un país válido en ${continente}.`
            );
          }
        } while (!paisEncontrado);
        {
          console.log(
            `¡Excelente elección! Quieres visitar ${pais} en ${continente}.`
          );
          break;
        }

      case "Oceania":
        console.log("Lista de países de Oceania disponibles \n");
        continentes.forEach(function (continentes) {
          if (continentes.codigo == "5") {
            continentes.paises.forEach(function (paises) {
              console.log(paises);
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
                }
              });
            }
          });

          // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
          if (!paisEncontrado) {
            console.log(
              `Lo siento, ${pais} no es un país válido en ${continente}.`
            );
          }
        } while (!paisEncontrado);
        {
          console.log(
            `¡Excelente elección! Quieres visitar ${pais} en ${continente}.`
          );
          break;
        }
    }
  }
}
