import readline from "readline";

// Función para leer una línea desde la consola
function readLine(prompt: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise<string>((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Función para validar que un valor sea numérico y esté dentro de un rango razonable
export function validateNumber(value: string, min: number, max: number): boolean {
  const num = Number(value);
  return !isNaN(num) && num >= min && num <= max;
}

// Función para calcular el precio final después de aplicar un descuento
export function calculateDiscountedPrice(originalPrice: number, discountPercentage: number): number {
  const discount = originalPrice * (discountPercentage / 100);
  return originalPrice - discount;
}

// Función para formatear un número en formato monetario con dos decimales
export function formatCurrency(value: number): string {
  return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Función principal del programa
async function main() {
  console.log("Calculadora de descuentos");
  console.log("-------------------------");

  let exit = false;

  while (!exit) {
    const originalPrice = await readLine("Ingrese el precio original del producto: ");
    const discountPercentage = await readLine("Ingrese el porcentaje de descuento a aplicar: ");

    if (validateNumber(originalPrice, 0, Number.MAX_SAFE_INTEGER) && validateNumber(discountPercentage, 0, 100)) {
      const finalPrice = calculateDiscountedPrice(Number(originalPrice), Number(discountPercentage));
      const formattedPrice = formatCurrency(finalPrice);

      console.log(`El precio final después del descuento es: $${formattedPrice}`);
    } else {
      console.log("Error: los valores ingresados no son válidos.");
    }

    const choice = await readLine("¿Desea realizar otro cálculo? (s/n): ");
    exit = choice.toLowerCase() !== "s";
    console.log();
  }

  console.log("¡Hasta luego!");
}

// Ejecutar la función principal
main().catch((error) => console.error(error));
