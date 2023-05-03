let destinoEncontrado = [];
let envio = 0;
let subtotal = 0;

//Recorre el array de carrito de compras con un forEach y los muestra
function mostrarCarrito() {
  if (carrito.length == 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El carrito está vacío",
      // footer: '<a href="">Why do I have this issue?</a>'
    });
    return;
  }

  const tabla = document.createElement("table");

  const encabezado = tabla.createTHead();
  const filaEncabezado = encabezado.insertRow();
  const nombreEncabezado = filaEncabezado.insertCell();
  nombreEncabezado.innerHTML = "<b>Nombre</b>";
  const precioEncabezado = filaEncabezado.insertCell();
  precioEncabezado.innerHTML = "<b>Precio</b>";

  const cuerpo = tabla.createTBody();
  carrito.forEach(function (carro) {
    const fila = cuerpo.insertRow();
    const nombreCelda = fila.insertCell();
    nombreCelda.textContent = carro.nombre;
    const precioCelda = fila.insertCell();
    precioCelda.textContent = carro.precio;
  });

  const filaTotal = cuerpo.insertRow();
  const celdaTotalEtiqueta = filaTotal.insertCell();
  celdaTotalEtiqueta.colSpan = 1;
  celdaTotalEtiqueta.innerHTML = "<b>Total:</b>";
  const celdaTotalValor = filaTotal.insertCell();
  celdaTotalValor.colSpan = 1;
  const precioTotal = new Eleccion(carrito).subtotal();
  celdaTotalValor.innerHTML = "<b>USD$" + precioTotal + "</b>";

  Swal.fire({
    title: "Tu carrito",
    html: tabla.outerHTML,
  });
}

//Evento para aumentar la cantidad de excursiones en el carrito
function actualizarCarrito() {
  const carritoCount = document.getElementById("cart-count");
  carritoCount.innerHTML = carrito.length;
  guardarCarrito();
}

function cargarCarrito() {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    actualizarCarrito();
    actualizarPrecios();
  }
}

function elegirDestino(codigoDestino) {
  //Busca el codigo que llega por parametro al hacer click en el boton reservar en las cards

  destinoEncontrado = destinos.find(
    (destino) => destino.codigo == codigoDestino
  );
  console.log("Destino encontrado: ", destinoEncontrado);
  destinoEncontrado
    ? destinoEncontrado.precio && !isNaN(parseFloat(destinoEncontrado.precio))
      ? (carrito.push(destinoEncontrado),
        alert(
          `Destino agregado al carrito: ${destinoEncontrado.nombre} pais:${destinoEncontrado.pais} $USD ${destinoEncontrado.precio}`
        ))
      : alert(
          "El precio del destino es inválido, por favor corregir el precio antes de agregarlo al carrito"
        )
    : alert(
        "El código ingresado es inválido, por favor ingresar un código válido"
      );

  actualizarCarrito();
}

//Eventos:

//Eventos para el buscador

const input = document.querySelector(".src");
const resultsWrapper = document.querySelector(".results");

//Funcion para mostrar los resultados de la busqueda del usuario

const showResults = (results) => {
  resultsWrapper.innerHTML = "";
  //Crea una lista desordenada en el html y una clase llamada results-list
  const resultsList = document.createElement("ul");
  resultsList.classList.add("results-list");
  resultsWrapper.appendChild(resultsList);

  //Se recorre el array de resultados y se crea por cada elemento encontrado, un elemento li y se lo agrega a la clase result-item
  results.forEach((result) => {
    const li = document.createElement("li");
    li.classList.add("result-item");
    li.textContent = result.nombre + " (" + result.pais + ")";
    //Cuando hago click en el resultado que me muestra, me autocompleta en el buscador eso mismo que me apareció en la lista
    li.addEventListener("click", () => {
      input.value = result.nombre + " (" + result.pais + ")";
      resultsWrapper.style.display = "none";
    });
    //Cuando el mouse esta sobre una de las opciones, crea una clase llamada result-item-hover la cual tiene ciertos atributos que cambian el color de fondo para que el usuario se de cuenta que puede hacerle click
    li.addEventListener("mouseover", () => {
      li.classList.add("result-item-hover");
    });
    li.addEventListener("mouseout", () => {
      li.classList.remove("result-item-hover");
    });
    resultsList.appendChild(li);
  });

  resultsWrapper.style.display = "block";
};

const filterDestinos = (searchText) => {
  return destinos.filter((destino) =>
    `${destino.nombre} (${destino.pais})`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );
};

input.addEventListener("input", (e) => {
  const searchText = e.target.value;

  searchText.length > 0
    ? // Expresión si la condición es verdadera
      (() => {
        const filteredDestinos = filterDestinos(searchText);
        showResults(filteredDestinos);
      })()
    : // Expresión si la condición es falsa
      (resultsWrapper.style.display = "none");
});

document.addEventListener("click", (e) => {
  if (!resultsWrapper.contains(e.target)) {
    resultsWrapper.style.display = "none";
  }
});

//Evento para mostrar el carrito al hacer click

const cartIcon = document.querySelector(".cart-icon");

cartIcon.addEventListener("click", () => {
  mostrarCarrito();
});

//Generar las cards de forma dinamica
const contenedorCards = document.querySelector(".cardContainer");

function generarCard(destino) {
  const nombreSinEspacios = destino.nombre.replace(/\s+/g, "");
  const nombreImagen = `images/${nombreSinEspacios.toLowerCase()}.jpg`;

  return `
    <div class="card ">
      <figure>
        <img src="${nombreImagen}" alt="${destino.nombre}" />
      </figure>
      <div class="contenido">
      <h2 class="${destino.continente.toLowerCase()}" >${
    destino.continente
  }</h2>
        <h3>${destino.pais}</h3>
        <h5>${destino.nombre}</h5>
        <p>${destino.texto}</p>
        <h6>$${destino.precio}</h6>
        <button href="#" data-id="${
          destino.codigo
        }" class="reservar" data-name="${destino.nombre}">Reservar</button>
      </div>
    </div>
  `;
}

destinos.forEach((destino) => {
  const card = generarCard(destino);
  contenedorCards.innerHTML += card;
});
//Evento para reservar
//Selecciona todos los botones de "Reservar" por su clase
const botonesReservar = document.querySelectorAll(".reservar");

//Itera sobre cada botón de "Reservar" y agrega un evento de clic a cada uno

botonesReservar.forEach((boton) => {
  boton.addEventListener("click", (event) => {
    event.preventDefault();

    const codigoDestino = boton.dataset.id;

    elegirDestino(codigoDestino);
  });
});

//Evento para simular la finalizacion de la compra
const finalizarCompra = document.querySelector(".botonCompra");

finalizarCompra.addEventListener("click", (e) => {
  if (carrito.length == 0) {
    alert("No es posible finalizar la compra ya que el carrito esta vacío");
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Gracias por su compra",
      showConfirmButton: false,
      timer: 1500,
    });

    carrito.length = 0;
    guardarCarrito();
    actualizarCarrito();
  }
});

//Local Storage

// Función para guardar el carrito en localStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

window.addEventListener("load", function () {
  cargarCarrito();
});
// Cargar el carrito al cargar la página
cargarCarrito();

//Eventos para filtrar las Cards por continentes

const btnFilterContinent = document.querySelectorAll(".filtro-continente");
const cards = document.querySelectorAll(".card");

function filtrar(e) {
  e.preventDefault();
  const cont = e.target.id;
  filtroContinente(cont);
}

const filtroContinente = (continente) => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    if (continente === "todos") {
      card.style.display = "block";
    } else {
      card.style.display =
        card.querySelector(`.card .${continente}`) !== null ? "block" : "none";
    }
  });
};

// Función para manejar el evento de filtrado
function filtrar(e) {
  e.preventDefault();
  const continente = e.target.id.toLowerCase();
  filtroContinente(continente);
}

// Asignar eventos a los botones de filtro
btnFilterContinent.forEach((btn) => {
  btn.addEventListener("click", filtrar);
});

//Evento para que el menu hamburguesa se cierre cada vez que elijo un continente

const filtrosContinentes = document.querySelectorAll(".filtro-continente");
const check = document.getElementById("check");

filtrosContinentes.forEach((filtro) => {
  filtro.addEventListener("click", () => {
    check.checked = false;
    const links = document.querySelectorAll(".link");

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        const check = document.getElementById("check");
        if (check.checked) {
          check.checked = false; // Cerrar menú hamburguesa
          filtrarPorContinente(event.target.id); // Filtrar por continente seleccionado
        }
      });
    });
  });
});
