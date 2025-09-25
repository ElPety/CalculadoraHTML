// Obtenemos el display
const display = document.getElementById("Display");

// Guardamos la expresión actual
let expresion = "";

// ---------------------------
// Funciones principales
// ---------------------------

// Agregar número u operador
function agregar(valor) {
  expresion += valor;
  display.textContent = expresion;
}

// Calcular el resultado
function calcular() {
  try {
    // Usamos eval para resolver la cadena
    const resultado = eval(expresion);
    display.textContent = resultado;
    expresion = resultado.toString(); // seguir calculando sobre el resultado
  } catch {
    display.textContent = "Error";
    expresion = "";
  }
}

// Limpiar pantalla
function limpiar() {
  expresion = "";
  display.textContent = "";
}

// ---------------------------
// Conectar botones
// ---------------------------

// Números
document.querySelector(".number0").addEventListener("click", () => agregar("0"));
document.querySelector(".number1").addEventListener("click", () => agregar("1"));
document.querySelector(".number2").addEventListener("click", () => agregar("2"));
document.querySelector(".number3").addEventListener("click", () => agregar("3"));
document.querySelector(".number4").addEventListener("click", () => agregar("4"));
document.querySelector(".number5").addEventListener("click", () => agregar("5"));
document.querySelector(".number6").addEventListener("click", () => agregar("6"));
document.querySelector(".number7").addEventListener("click", () => agregar("7"));
document.querySelector(".number8").addEventListener("click", () => agregar("8"));
document.querySelector(".number9").addEventListener("click", () => agregar("9"));

// Operadores
document.querySelector(".operatorsum").addEventListener("click", () => agregar("+"));
document.querySelector(".operatorres").addEventListener("click", () => agregar("-"));
document.querySelector(".operatormult").addEventListener("click", () => agregar("*"));
document.querySelector(".operatordiv").addEventListener("click", () => agregar("/"));

// Punto decimal (tu HTML tiene coma, la convierto a punto para JS)
document.querySelector(".coma").addEventListener("click", () => agregar("."));

// Igual
document.querySelector(".equals").addEventListener("click", calcular);

// Limpiar
document.querySelector(".clear").addEventListener("click", limpiar);