const destinos = [
  {
    codigo: 1,
    nombre: "Auroras Boreales",
    continente: "Europa",
    pais: "Islandia",
    texto:
      "Embárcate en una aventura inolvidable a Islandia para presenciar unode los fenómenos naturales más fascinantes del mundo: las aurorasboreales. Únete a nosotros en este viaje único y contempla las lucesdanzantes en el cielo nocturno. ¡Reserva ahora y vive unaexperiencia mágica!",
    precio: 150,
  },
  {
    codigo: 2,
    nombre: "Costa Sur",
    continente: "Europa",
    pais: "Islandia",
    texto:
      "Descubre la belleza natural de la costa sur de Islandia, hogar deimpresionantes cascadas y playas de arena negra. Sumérgete en lamajestuosidad de la naturaleza mientras exploras los increíblespaisajes de esta región única. Reserva ahora y prepárate para unaexperiencia inolvidable en la costa sur de Islandia",
    precio: 130,
  },
  {
    codigo: 3,
    nombre: "Glaciar Katla",
    continente: "Europa",
    pais: "Islandia",
    texto:
      "¡Adéntrate en la majestuosidad del glaciar Katla! Únete a nosotrosen esta aventura única en Islandia y descubre la impresionantebelleza natural de uno de los glaciares más grandes del país. Caminasobre hielo cristalino y maravíllate con las vistas panorámicasdesde la cima. ¡Reserva ahora y prepárate para una experienciaemocionante en el glaciar Katla!",
    precio: 200,
  },
  {
    codigo: 4,
    nombre: "Parque Nacional Zion",
    continente: "América",
    pais: "Estados Unidos",
    texto:
      " ¡Descubre la belleza natural de Zion! Ubicado en el suroeste de Utah, el Parque Nacional Zion es una joya natural con acantilados rocosos, valles verdes y arroyos cristalinos. Explora sus senderosde caminata, contempla sus paisajes desde el mirador de Angels Landing, o disfruta de la tranquilidad del río Virgin. ¡Zion es un destino imprescindible para los amantes de la naturaleza y los aventureros!",
    precio: 100,
  },

  {
    codigo: 5,
    nombre: "Cataratas del Iguazu",
    continente: "América",
    pais: "Argentina",
    texto:
      "Descubre la maravilla natural de las Cataratas del Iguazú con nuestros emocionantes tours de alquiler. Explora las cascadas desde múltiples ángulos y admira la belleza del Parque Nacional Iguazú en Argentina. Ofrecemos opciones de excursiones personalizadas para satisfacer tus necesidades y presupuesto. ¡Reserva ahora y experimenta la emoción de las Cataratas del Iguazú!",
    precio: 110,
  },
  {
    codigo: 6,
    nombre: "Safari en Uganda",
    continente: "África",
    pais: "Uganda",
    texto:
      "¡Ven a vivir una experiencia única en un safari en Uganda! Descubrela diversidad de la fauna africana en su hábitat natural, en uno delos destinos más impresionantes del continente. Observa de cerca a los majestuosos gorilas de montaña, los elefantes africanos y otrosanimales salvajes mientras disfrutas de un recorrido en un vehículo 4x4 con un guía experto. ¡Reserva tu safari en Uganda ahora y viveuna aventura inolvidable!",
    precio: 250,
  },

  {
    codigo: 7,
    nombre: "Piramides de Egipto",
    continente: "África",
    pais: "Egipto",
    texto:
      "Explora la majestuosidad de las Pirámides de Egipto con nuestros emocionantes tours de alquiler. Descubre los misterios de la antigua civilización egipcia mientras te adentras en las tumbas y templos de los faraones. Ofrecemos opciones de excursiones personalizadas para satisfacer tus necesidades y presupuesto. ¡Reserva ahora y experimenta la grandeza de las Pirámides de Egipto!",
    precio: 200,
  },
  {
    codigo: 8,
    nombre: "Barrera de Coral",
    continente: "Oceanía",
    pais: "Australia",
    texto:
      "¿Quieres explorar el mundo submarino de la Gran Barrera de Coral? ¡Únete a nuestro emocionante tour de buceo y descubre la belleza natural de una de las maravillas del mundo! Nuestros instructorescertificados te guiarán a través de los arrecifes y te mostrarán una amplia variedad de peces tropicales, tiburones, rayas y otras criaturas marinas. ¡Reserva tu tour de buceo en la Gran Barrera deCoral ahora y vive una experiencia inolvidable en Australia!",
    precio: 280,
  },
  {
    codigo: 9,
    nombre: "Parque Nacional Fiordland",
    continente: "Oceanía",
    pais: "Nueva Zelanda",
    texto:
      " ¡Explora la naturaleza salvaje de Nueva Zelanda en una aventura enel Parque Nacional Fiordland! Camina por impresionantes paisajes demontañas, fiordos y bosques nativos. Observa de cerca a los famosos pájaros kiwi y admira las majestuosas cascadas. ¡Reserva tu excursión al Parque Nacional Fiordland ahora y descubre la belleza natural de Nueva Zelanda!",
    precio: 150,
  },
  {
    codigo: 10,
    nombre: "Taj Mahal",
    continente: "Asia",
    pais: "India",
    texto:
      "Sumérgete en la majestuosidad del Taj Mahal con nuestra excursión.Descubre la historia detrás de una de las maravillas arquitectónicasdel mundo mientras disfrutas de su belleza atemporal. Reserva ahora y déjanos llevarte en un viaje único lleno de cultura y aventuras enIndia.",
    precio: 100,
  },
  {
    codigo: 11,
    nombre: "Muralla China",
    continente: "Asia",
    pais: "China",
    texto:
      "¡Explora la Gran Muralla China! Únete a nuestra emocionanteexcursión y descubre uno de los sitios más emblemáticos del mundo.Camina sobre siglos de historia y disfruta de las impresionantesvistas panorámicas. Reserva ahora y crea recuerdos inolvidables en tu viaje a China.",
    precio: 80,
  },
];

let carrito = [];
