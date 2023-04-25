let destinoEncontrado = [];

//Recorre el array de carrito de compras con un forEach y los muestra
function mostrarCarrito() {
  if (carrito.length == 0) {
    alert("El carrito está vacío");
    return;
  }

  carrito.forEach(function (carro) {
    alert(
      "Estas son tus compras: " + carro.nombre + " - " + "USD$" + carro.precio
    ); // Mostrar solo el nombre y el precio de cada elemento en el carrito
  });

  const precioTotal = new Eleccion(carrito);
  alert(
    "El precio total de las excursiones en el carrito es de: USD$ " +
      precioTotal.subtotal()
  );
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
  }
}

function elegirDestino(codigoDestino) {
  //Busca el codigo que llega por parametro al hacer click en el boton reservar en las cards

  destinoEncontrado = destinos.find(
    (destino) => destino.codigo == codigoDestino
  );
  console.log("Destino encontrado: ", destinoEncontrado);
  destinoEncontrado
    ? (carrito.push(destinoEncontrado),
      alert(
        `Destino agregado al carrito: ${destinoEncontrado.nombre} pais:${destinoEncontrado.pais} $USD ${destinoEncontrado.precio}`
      ))
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
    alert("Gracias por su compra! Vuelva pronto");

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

const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const continente = link.getAttribute("id");
    const cards = document.querySelectorAll(
      `.card.${continente.toLowerCase()}`
    );

    const todasLasCards = document.querySelectorAll(".card");

    todasLasCards.forEach((card) => {
      card.style.display = "none";
    });

    cards.forEach((card) => {
      card.style.display = "block";
    });

    // Agregar clase "active" al enlace
    const activeLink = document.querySelector(".active");
    activeLink.classList.remove("active");
    link.classList.add("active");
  });
});
