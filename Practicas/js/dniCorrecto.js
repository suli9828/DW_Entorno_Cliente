var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 
              't', 'r', 'w', 'a', 'g', 'm', 'y', 'f', 'p', 'd', 'x', 'b', 'n', 'j', 'z', 's', 'q', 'v', 'h', 'l', 'c', 'k', 'e'];


var numero = prompt("Introduce tu número de DNI sin la letra");
var letra = prompt("Introduce la letra de tu DNI.");
letra = letra.toUpperCase();


if(numero < 0 || numero > 99999999) {
  numNoCorrecto = "El número de DNI no es válido.";
  document.write(numNoCorrecto);
}
else {
  var letraCalculada = letras[numero % 23];
  if(letraCalculada != letra) {
    letraNoCorrecta =("La letra o el número no son correctos.");
    document.write(letraNoCorrecta);
  }
  else {
    resultado = "El número de DNI y la letra son correctos.";
    document.write(resultado);
  }
}
