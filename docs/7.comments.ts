/**
 * Clase que representa un coche.
 */
class Coche {
  marca: string;
  modelo: string;
  año: number;

  /**
   * Crea una instancia de la clase Coche.
   * @param marca La marca del coche.
   * @param modelo El modelo del coche.
   * @param año El año del coche.
   */
  constructor(marca: string, modelo: string, año: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  /**
   * Obtiene los detalles del coche.
   * @returns Los detalles del coche.
   */
  obtenerDetalles() {
    return `Este coche es un ${this.marca} ${this.modelo} del año ${this.año}.`;
  }
}

const miCoche = new Coche("Toyota", "Corolla", 2021);
console.log(miCoche.obtenerDetalles()); // Este coche es un Toyota Corolla del año 2021.

/**
 * Función que suma dos números.
 * @param a El primer número a sumar.
 * @param b El segundo número a sumar.
 * @returns La suma de los dos números.
 */
function sumar(a: number, b: number) {
  return a + b;
}

console.log(sumar(2, 3)); // 5
