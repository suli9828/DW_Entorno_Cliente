/*Función que le pide al usuario las filas y columnas que desea. */
function generarTablero() {
  let filas = parseInt(prompt('Introduce las filas del tablero.'));
  /*Las filas no pueden ser menos de 2 y más de 20 por lo que se pide un número entre esos dos
  y en caso de que no se introduzca bien se volverá a pedir. */
  while (filas < 2 || filas > 20) {
    filas = parseInt(
      prompt('Número inválido, introduce las filas del tablero.')
    );
  }
  let columnas = parseInt(prompt('Introduce las columnas del tablero.'));
  /*Las columnas no pueden ser menos de 2 y más de 20 por lo que se pide un número entre esos dos
  y en caso de que no se introduzca bien se volverá a pedir. */
  while (columnas < 2 || columnas > 20) {
    columnas = parseInt(
      prompt('Número inválido, introduce las columnas del tablero.')
    );
  }

  let tableroArray = [];

  /*Se recorre el array. */
  for (let f = 0; f < filas; f++) {
    tableroArray[f] = [];
    for (let c = 0; c < columnas; c++) {
      tableroArray[f][c] = 0;
    }
  }
  return tableroArray;
}

/*Función inserta un número de minas aleatorio en el tablero. */
function insertaMinas(tableroArray) {
  /*Preguntamos al usuario cuántas minas queremos que hayan. */
  let numMinas = parseInt(prompt('Introduce las minas del tablero.'));
  /* No pueden haber menos de 2 minas o más que la mitad de casillas totales que hay en el tablero */
  while (
    numMinas < 2 ||
    numMinas >= (tableroArray.length * tableroArray[0].length) / 2
  ) {
    numMinas = parseInt(
      prompt('Número inválido, introduce las minas del tablero.')
    );
  }

  /*Este bucle se recorre una vez por cada mina que se inserta. */
  for (let i = 0; i < numMinas; i++) {
    let x = parseInt(Math.random() * tableroArray.length);
    let y = parseInt(Math.random() * tableroArray[0].length);
    /*Si ya existe una mina en esas coordenadas, se vuelven a generar hasta encontrar una casilla vacía.*/
    while (tableroArray[x][y] == 'x') {
      x = parseInt(Math.random() * tableroArray.length);
      y = parseInt(Math.random() * tableroArray[0].length);
    }
    tableroArray[x][y] = 'x';
  }
}

/*Función que cuenta las minas alrededor de cada casilla. */
function minasCerca(tableroArray) {
  /*Se recorren las filas del tablero. */
  for (let fila = 0; fila < tableroArray.length; fila++) {
    /*Se recorren las columnas del tablero. */
    for (let columna = 0; columna < tableroArray[0].length; columna++) {
      /*Si no encuentra una casilla en la casilla. */
      if (tableroArray[fila][columna] != 'x') {
        let numMinas = 0;
        /*Con este bucle se recorre la fila anterior, la actual y la siguiente a la casilla. */
        for (let aFila = fila - 1; aFila <= fila + 1; aFila++) {
          /*Con este bucle se recorre la columna anterior, la actual y la siguiente a la casilla. */
          for (
            let aColumna = columna - 1;
            aColumna <= columna + 1;
            aColumna++
          ) {
            /*Comprobamos que la casilla está dentro del tablero. */
            if (
              aFila > -1 &&
              aColumna > -1 &&
              aFila < tableroArray.length &&
              aColumna < tableroArray[0].length
            ) {
              /*Si hay una mina en esa casilla. */
              if (tableroArray[aFila][aColumna] == 'x') {
                /*Se suma a la variable que cuenta las minas. */
                numMinas++;
              }
            }
          }
        }
        tableroArray[fila][columna] = numMinas;
      }
    }
  }
}

/*Función que dibuja el tablero. */
function dibujaTablero(tableroArray) {
  let tablero = document.getElementById('tablero');
  /*Las siguientes propiedades sirven para que el tablero quede mejor reflejado visualmente en pantalla. */
  document
    .querySelector('html')
    .style.setProperty('--num-filas', tableroArray.length);
  document
    .querySelector('html')
    .style.setProperty('--num-columnas', tableroArray[0].length);
  /* Se recorren las filas del tablero. */
  for (let f = 0; f < tableroArray.length; f++) {
    /* Se recorren las columnas del tablero. */
    for (let c = 0; c < tableroArray[0].length; c++) {
      if (tableroArray[f][c] == 'x') {
        /*Si la casilla tiene una mina muestra un icono de bomba. */
        tablero.innerHTML += `<div>\u{1F4A3}</div>`;
      } else if (tableroArray[f][c] == 0) {
        tablero.innerHTML += `<div></div>`;
      } else {
        /*Si la casilla no contiene ninguna de las 2 anteriores muestra el contenido del tablero. */
        tablero.innerHTML += `<div>${tableroArray[f][c]}</div>`;
      }
    }
  }
}
