
class Coche {
  String marca;
  String modelo;
  int anio;

  Coche(String marca, String modelo, int anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  String obtenerDetalles() {
    return "Este coche es un " + this.marca + " " + this.modelo + " del año " + this.anio + ".";
  }
}

class Main {
  public static void main(String[] args) {
    Coche miCoche = new Coche("Toyota", "Corolla", 2021);
    System.out.println(miCoche.obtenerDetalles());
  }
}


