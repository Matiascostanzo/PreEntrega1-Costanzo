class Eleccion {
  constructor(carritoDeCompra) {
    this.carrito = carritoDeCompra;
  }

  subtotal() {
    if (this.carrito.length > 0) {
      return this.carrito.reduce((acc, destino) => acc + destino.precio, 0);
    }
  }
}
