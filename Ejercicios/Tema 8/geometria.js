const PI_CUADRADO = Math.PI * Math.PI;
function areaCirculo(radio) {
  return radio ** 2 * Math.PI;
}
function areaCuadrado(lado) {
  return lado ** 2;
}

function sumaMismoDosVeces(num) {
  return num + num;
}

export { PI_CUADRADO, areaCirculo, areaCuadrado, sumaMismoDosVeces };
