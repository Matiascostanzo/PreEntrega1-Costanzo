let continente = "";
let pais = "";
let result = true;
let paisEncontrado = false;

function primerLetraMayuscula(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function elegirExcursion() {
  continentes.forEach(function (continentes) {
    console.log(continentes.nombre);
  });

  // El usuario elige el continente
  let hospedaje = prompt("Elegir continente");
  primerLetraMayuscula(hospedaje);

  if (
    hospedaje != "America" &&
    hospedaje != "Asia" &&
    hospedaje != "Africa" &&
    hospedaje != "Europa" &&
    hospedaje != "Oceania"
  ) {
    // Si el hospedaje elegido es distinto a cualquier opcion válida, el usuario será solicitado para ingresarlo de nuevo
    alert("Elegir una opcion válida");
    hospedaje = prompt("Elegir continente");
    primerLetraMayuscula(hospedaje);
    while (
      //Hasta que elija una opcion válida seguirá pidiendo que el usuario elija una opción
      hospedaje != "America" &&
      hospedaje != "Asia" &&
      hospedaje != "Africa" &&
      hospedaje != "Europa" &&
      hospedaje != "Oceania"
    ) {
      alert("Elegir una opcion válida");
      hospedaje = prompt("Elegir continente");
      primerLetraMayuscula(hospedaje);
    }
  }

  if (
    hospedaje == "America" ||
    hospedaje == "Asia" ||
    hospedaje == "Africa" ||
    hospedaje == "Europa" ||
    hospedaje == "Oceania"
  ) {
    switch (hospedaje) {
      case "America":
        continente = "América";
        console.log("Elegíste " + continente);

        break;

      case "Asia":
        continente = "Asia";
        console.log("Elegíste " + continente);

        break;

      case "Africa":
        continente = "África";
        console.log("Elegíste " + continente);

        break;

      case "Europa":
        continente = "Europa";
        console.log("Elegíste " + continente);

        break;

      case "Oceania":
        continente = "Oceanía";
        console.log("Elegíste " + continente);

        break;
    }

    switch (hospedaje) {
      //Nos consulta que país queremos visitar  de dicho continente elegido
      case "America":
        console.log("Lista de países de America disponibles \n");
        continentes.forEach(function (continentes) {
          if (continentes.nombre === "America") {
            continentes.paises.forEach(function (paises) {
              console.log(paises);
            });
          }
        });

        do {
          pais = prompt("¿Qué país de América quieres visitar?");
          pais = primerLetraMayuscula(pais);

          // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
          continentes.forEach(function (continente) {
            if (continente.nombre === "America") {
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

      case "Asia":
        console.log("Lista de países de Asia disponibles \n");
        continentes.forEach(function (continentes) {
          if (continentes.nombre === "Asia") {
            continentes.paises.forEach(function (paises) {
              console.log(paises);
            });
          }
        });

        do {
          pais = prompt("¿Qué país de Asia quieres visitar?");
          pais = primerLetraMayuscula(pais);

          // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
          continentes.forEach(function (continente) {
            if (continente.nombre === "Asia") {
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

      case "Africa":
        console.log("Lista de países de Africa disponibles \n");
        continentes.forEach(function (continentes) {
          if (continentes.nombre === "Africa") {
            continentes.paises.forEach(function (paises) {
              console.log(paises);
            });
          }
        });

        do {
          pais = prompt("¿Qué país de Africa quieres visitar?");
          pais = primerLetraMayuscula(pais);

          // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
          continentes.forEach(function (continente) {
            if (continente.nombre === "Africa") {
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

      case "Europa":
        console.log("Lista de países de Europa disponibles \n");
        continentes.forEach(function (continentes) {
          if (continentes.nombre === "Europa") {
            continentes.paises.forEach(function (paises) {
              console.log(paises);
            });
          }
        });

        do {
          pais = prompt("¿Qué país de Europa quieres visitar?");
          pais = primerLetraMayuscula(pais);

          // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
          continentes.forEach(function (continente) {
            if (continente.nombre === "Europa") {
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
          if (continentes.nombre === "Oceania") {
            continentes.paises.forEach(function (paises) {
              console.log(paises);
            });
          }
        });

        do {
          pais = prompt("¿Qué país de Oceania quieres visitar?");
          pais = primerLetraMayuscula(pais);

          // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
          continentes.forEach(function (continente) {
            if (continente.nombre === "Oceania") {
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
