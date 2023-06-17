class Persona {
  static contadorPersonas = 0;

  constructor(idPersona, nombre, apellido, edad) {
    this._idPersona = idPersona;
    this._nombre = nombre;
    this._apeillido = apellido;
    this._edad = edad;
  }

  get idPersona() { return this._idPersona; }

  get nombre() { return this._nombre; }
  set nombre(nombre) { this._nombre = nombre; }

  get apellido() { return this._apeillido; }
  set apellido(apellido) { this._apeillido = apellido; }

  get edad() { return this._edad; }
  set edad(edad) { this._edad = edad; }

  toString() {
    return `${this._idPersona} ${this._nombre} ${this._apeillido} ${this._edad}`;
  }
}