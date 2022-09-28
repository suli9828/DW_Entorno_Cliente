let jugar = true;
do {
  let num = parseInt(Math.random() * 100 + 1);
  let numUsuario = 0;
  let oportunidades = 0;
  do {
    do {
      numUsuario = parseInt(prompt("Adivina el número entre 1 y 100:"));
    } while (numUsuario < 1 || numUsuario > 100);
    if (numUsuario < num) {
      alert("El número es mayor que " + numUsuario);
    } else if (numUsuario > num) {
      alert("El número es menor que " + numUsuario);
    }
  } while (num != numUsuario && numUsuario);
  if (num == numUsuario) {
    alert("Has ganado, el número era " + numUsuario);
  } else {
    alert("Ha salido del juego, el número era " + num);
  }
  jugar = confirm("¿Quieres volver a jugar?");
} while (jugar);
