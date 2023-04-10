// Paso 1: Mostrar la lista de destinos disponibles
// Paso 2: Que el usuario ingrese el codigo del destino que quiere ir y corroborar que esté en el array de destinos
// Paso 3: Preguntarle al usuario si esta seguro de querer agregar esa Excursion
// Paso 4: Si confirma, agregarlo al carrito , sino, volver Atras
// Paso 5: Preguntarle si quiere seguir agregando algun destino, si si, volver a solicitar que el usuario ingrese un codigo, sino, mostrar el total del carrito y finalizar
let destinoEncontrado = [];

//Recorre el array de destinos con un forEach y los muestra
function mostrarDestinos() {
  console.log("Destinos disponibles:");
  destinos.forEach(function (destino) {
    console.log(destino);
  });
}

//Recorre el array de carrito de compras con un forEach y los muestra
function mostrarCarrito() {
  console.log("Estas son tus compras:");
  carrito.forEach(function (destino) {
    console.log(destino);
  });
  //Instancio un objeto con el constructor de la clase Eleccion para mostrar el total del carrito
  const precioTotal = new Eleccion(carrito);
  console.log(
    "El precio total de las excursiones en el carrito es de: " +
      precioTotal.subtotal()
  );
}

//El usuario elije el codigo del destino que quiere visitar
function elegirDestino() {
  let destinoElegido = parseInt(
    prompt("Elegir el codigo del destino que quieres visitar")
  );
  //Busca el codigo ingresado por el usuario en el array destinos
  destinoEncontrado = destinos.find(
    (destino) => destino.codigo === destinoElegido
  );
  while (destinoEncontrado === undefined) {
    alert(
      "El codigo ingresado es invalido, por favor ingresar un codigo valido"
    );
    destinoElegido = parseInt(
      prompt("Ingrese el codigo del destino que quieres visitar:")
    );
    destinoEncontrado = destinos.find(
      (destino) => destino.codigo === destinoElegido
    );
  }

  console.log(
    `Destino elegido: ${destinoEncontrado.nombre}, ${destinoEncontrado.pais}, $USD ${destinoEncontrado.precio}.`
  );
}

function agregarAlCarrito() {
  let eleccion = confirm(
    "¿Quieres agregar ese destino a tu carrito de compras?"
  );
  //Si el usuario confirma que quiere agregar esa excursion, la agrega al carrito
  if (eleccion === true) {
    console.log("Se agregó la excursion al carrito");
    carrito.push(destinoEncontrado);
  } else {
    console.log("Se eliminó la excursion:" + destinoEncontrado.nombre);
  }
}

//Si el usuario quiere seguir agregando excursiones, llamo a las funciones elegisDestino y agregarAlCarrito
function elegirOtro() {
  let decision = true;
  while (decision) {
    decision = confirm("¿Quieres seguir agregando excursiones al carrito?");
    if (decision) {
      elegirDestino();
      agregarAlCarrito();
    }
  }
}

//Funcion principal que llama al resto de las funciones y al final reinicio el carrito a 0
function compras() {
  mostrarDestinos();
  elegirDestino();
  agregarAlCarrito();
  elegirOtro();
  mostrarCarrito();
  carrito.length = 0;
}

// let continente = "";
// let destinoElegido = "";
// let result = true;
// let destinoEncontrado = false;
// let eleccion = "";
// let destinoSeleccionado = "";
// let compras = [];
// const continentesPosibles = {
//   1: "Elegiste America",
//   2: "Elegiste Asia",
//   3: "Elegiste Africa",
//   4: "Elegiste Europa",
//   5: "Elegiste Oceania",
// };

// const continenteInvalido = "Elije un continente válido";

// function primerLetraMayuscula(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }

// function elegirExcursion() {
//   continentes.forEach(function (continentes) {
//     console.log(`Código: ${continentes.codigo}, Nombre: ${continentes.nombre}`);
//   });

//   // El usuario elige el continente
//   let hospedaje = prompt("Elegir codigo de continente");

//   if (
//     hospedaje != "1" &&
//     hospedaje != "2" &&
//     hospedaje != "3" &&
//     hospedaje != "4" &&
//     hospedaje != "5"
//   ) {
//     // Si el hospedaje elegido es distinto a cualquier opcion válida, el usuario será solicitado para ingresarlo de nuevo
//     alert("Elegir una opcion válida");
//     hospedaje = prompt("Elegir continente");

//     while (
//       //Hasta que elija una opcion válida seguirá pidiendo que el usuario elija una opción
//       hospedaje != "1" &&
//       hospedaje != "2" &&
//       hospedaje != "3" &&
//       hospedaje != "4" &&
//       hospedaje != "5"
//     ) {
//       alert("Elegir una opcion válida");
//       hospedaje = prompt("Elegir continente");
//     }
//   }

//   if (
//     hospedaje == "1" ||
//     hospedaje == "2" ||
//     hospedaje == "3" ||
//     hospedaje == "4" ||
//     hospedaje == "5"
//   ) {
//     eleccion = continentesPosibles[hospedaje] || continenteInvalido;
//     console.log(eleccion);

//     switch (hospedaje) {
//       //Nos consulta que país queremos visitar  de dicho continente elegido
//       case "1":
//         console.log("Lista de destinos de America disponibles \n");
//         continentes.forEach(function (destino) {
//           if (destino.codigo == "1") {
//             continenteSeleccionado = destino.nombre;
//             destino.destinos.forEach(function (destinos) {
//               console.log(destinos);
//             });
//           }
//         });

//         do {
//           paisEncontrado = false;
//           destinoElegido = prompt("¿Qué destino de América quieres visitar?");
//           destinoElegido = primerLetraMayuscula(destinoElegido);

//           // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
//           continentes.forEach(function (destino) {
//             if (destino.codigo == "1") {
//               destino.destinos.forEach(function (elegido) {
//                 if (elegido === destinoElegido) {
//                   destinoEncontrado = true;
//                   destinoSeleccionado = destino.nombre;
//                 }
//               });
//             }
//           });

//           // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
//           if (!destinoEncontrado) {
//             console.log(
//               `Lo siento, ${destinoElegido} no es un destino válido en América.`
//             );
//           }
//         } while (!destinoEncontrado);

//         console.log(
//           `¡Excelente elección! Quieres visitar ${destinoElegido} en ${destinoSeleccionado}.`
//         );
//         break;

//       case "2":
//         console.log("Lista de destinos de Asia disponibles \n");
//         continentes.forEach(function (destino) {
//           if (destino.codigo == "2") {
//             continenteSeleccionado = destino.nombre;
//             destino.destinos.forEach(function (destinos) {
//               console.log(destinos);
//             });
//           }
//         });

//         do {
//           paisEncontrado = false;
//           destinoElegido = prompt("¿Qué destino de América quieres visitar?");
//           destinoElegido = primerLetraMayuscula(destinoElegido);

//           // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
//           continentes.forEach(function (destino) {
//             if (destino.codigo == "2") {
//               destino.destinos.forEach(function (elegido) {
//                 if (elegido === destinoElegido) {
//                   destinoEncontrado = true;
//                   destinoSeleccionado = destino.nombre;
//                 }
//               });
//             }
//           });

//           // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
//           if (!destinoEncontrado) {
//             console.log(
//               `Lo siento, ${destinoElegido} no es un destino válido en Asia.`
//             );
//           }
//         } while (!destinoEncontrado);

//         console.log(
//           `¡Excelente elección! Quieres visitar ${destinoElegido} en ${destinoSeleccionado}.`
//         );
//         break;

//       case "3":
//         console.log("Lista de destinos de Africa disponibles \n");
//         continentes.forEach(function (destino) {
//           if (destino.codigo == "3") {
//             continenteSeleccionado = destino.nombre;
//             destino.destinos.forEach(function (destinos) {
//               console.log(destinos);
//             });
//           }
//         });

//         do {
//           paisEncontrado = false;
//           destinoElegido = prompt("¿Qué destino de Africa quieres visitar?");
//           destinoElegido = primerLetraMayuscula(destinoElegido);

//           // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
//           continentes.forEach(function (destino) {
//             if (destino.codigo == "3") {
//               destino.destinos.forEach(function (elegido) {
//                 if (elegido === destinoElegido) {
//                   destinoEncontrado = true;
//                   destinoSeleccionado = destino.nombre;
//                 }
//               });
//             }
//           });

//           // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
//           if (!destinoEncontrado) {
//             console.log(
//               `Lo siento, ${destinoElegido} no es un destino válido en Africa.`
//             );
//           }
//         } while (!destinoEncontrado);

//         console.log(
//           `¡Excelente elección! Quieres visitar ${destinoElegido} en ${destinoSeleccionado}.`
//         );
//         break;

//       case "4":
//         console.log("Lista de destinos de Europa disponibles \n");
//         continentes.forEach(function (destino) {
//           if (destino.codigo == "4") {
//             continenteSeleccionado = destino.nombre;
//             destino.destinos.forEach(function (destinos) {
//               console.log(destinos);
//             });
//           }
//         });

//         do {
//           paisEncontrado = false;
//           destinoElegido = prompt("¿Qué destino de Europa quieres visitar?");
//           destinoElegido = primerLetraMayuscula(destinoElegido);

//           // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
//           continentes.forEach(function (destino) {
//             if (destino.codigo == "4") {
//               destino.destinos.forEach(function (elegido) {
//                 if (elegido === destinoElegido) {
//                   destinoEncontrado = true;
//                   destinoSeleccionado = destino.nombre;
//                 }
//               });
//             }
//           });

//           // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
//           if (!destinoEncontrado) {
//             console.log(
//               `Lo siento, ${destinoElegido} no es un destino válido en Europa.`
//             );
//           }
//         } while (!destinoEncontrado);

//         console.log(
//           `¡Excelente elección! Quieres visitar ${destinoElegido} en ${destinoSeleccionado}.`
//         );
//         break;

//       case "5":
//         console.log("Lista de destinos de Oceania disponibles \n");
//         continentes.forEach(function (destino) {
//           if (destino.codigo == "5") {
//             continenteSeleccionado = destino.nombre;
//             destino.destinos.forEach(function (destinos) {
//               console.log(destinos);
//             });
//           }
//         });

//         do {
//           paisEncontrado = false;
//           destinoElegido = prompt("¿Qué destino de Oceania quieres visitar?");
//           destinoElegido = primerLetraMayuscula(destinoElegido);

//           // Verifica si el país ingresado por el usuario está en la lista de países del continente elegido
//           continentes.forEach(function (destino) {
//             if (destino.codigo == "5") {
//               destino.destinos.forEach(function (elegido) {
//                 if (elegido === destinoElegido) {
//                   destinoEncontrado = true;
//                   destinoSeleccionado = destino.nombre;
//                 }
//               });
//             }
//           });

//           // Si el país ingresado no está en la lista, pide al usuario que ingrese otro país
//           if (!destinoEncontrado) {
//             console.log(
//               `Lo siento, ${destinoElegido} no es un destino válido en Oceania.`
//             );
//           }
//         } while (!destinoEncontrado);

//         console.log(
//           `¡Excelente elección! Quieres visitar ${destinoElegido} en ${destinoSeleccionado}.`
//         );
//         break;
//     }
//   }
// }
