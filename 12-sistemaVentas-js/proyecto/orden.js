

class Orden {

  static contadorOrdenes = 0;

  static get MAX_PRODUTOS() { return 5; }

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
    this._contadorProductosAgregados = 0;
  }

}

let producto1 = new Producto('Pantalón', 200);
let producto2 = new Producto('Camisa', 100);
console.log( producto1.toString() );
console.log( producto2.toString() );