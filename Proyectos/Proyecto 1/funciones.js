/*Función principal que llama a las demás funciones. */
function buscaminas() {
  let tablero = iniciaTablero(getN_filas(), getN_columnas());

  /*Después de inicializar el tablero se colocan las minas.*/
  colocaMinas(tablero, getN_minas(tablero.length, tablero[0].length));

  /*Cuando las minas están colocadas, llamamos a esta función para guardar en cada casilla el número de minas que hay alrededor.*/
  colocaRelleno(tablero);

  /*Y con la siguiente función se mostraría el tablero. */
  dibujaTablero(tablero);
}

/*  Pide al usuario el número de filas y las valida.*/
function getN_filas() {
  let filas = 0;
  do {
    filas = parseInt(prompt('Introduce las filas del tablero.'));
  } while (filas < 2 || filas > 20);
  return filas;
}

/* Pide al usuario el número de columnas y las valida.*/
function getN_columnas() {
  let columnas = 0;
  do {
    columnas = parseInt(prompt('Introduce las columnas del tablero.'));
  } while (columnas < 2 || columnas > 20);
  return columnas;
}

/*Función que creará el array que representará el tablero. */
function iniciaTablero(filas, columnas) {
  let tablero = [];

  /* Recorremos el array.*/
  for (let f = 0; f < filas; f++) {
    /* Obtenemos un array bidimensional creando otro array en el array principal.*/
    tablero[f] = [];
    for (let c = 0; c < columnas; c++) {
      /* En cada valor del array bidimensional, almacenamos un 0.*/
      tablero[f][c] = 0;
    }
  }

  return tablero;
}

/*  Pide al usuario el número de minas y las valida.*/
function getN_minas(nFilas, nColumnas) {
  let minas = 0;
  do {
    minas = parseInt(prompt('Introduce las minas del tablero.'));
  } while (minas < 2 || minas >= (nFilas * nColumnas) / 2);
  {
  }
  return minas;
}

/* Funcion que coloca las minas en el tablero de manera aleatoria.*/
function colocaMinas(tablero, minas) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < minas; i++) {
    /*Si se encuentra que hay una mina, se generan nuevas coordenadas. */
    do {
      x = parseInt(
        Math.random() * tablero.length
      ); /* tablero.length representa las filas que contiene el array.*/
      y = parseInt(
        Math.random() * tablero[0].length
      ); /* tablero[0].length representa las columnas que contiene el array.*/
    } while (tablero[x][y] == 'MINA');
    /*Si no hay mina se coloca una. */
    tablero[x][y] = 'MINA';
  }
}

/* Funcion que cuenta el número de minas que hay alrededor de su posición. */
function nMinasPos(tablero, fila, columna) {
  let numMinas = 0;

  /* Se recorren las filas. */
  for (let zFila = fila - 1; zFila <= fila + 1; zFila++) {
    /* Se recorren las columnas. */
    for (let zColumna = columna - 1; zColumna <= columna + 1; zColumna++) {
      if (
        zFila > -1 &&
        zColumna > -1 &&
        zFila < tablero.length &&
        zColumna < tablero[0].length
      ) {
        if (tablero[zFila][zColumna] == 'MINA') {
          numMinas++;
        }
      }
    }
  }
  return numMinas;
}

/*Función que recorre el tablero marcando en cada casilla las minas que hay alrededor.*/
function colocaRelleno(tablero) {
  /* Se recorre todo el tablero. */
  for (let fila = 0; fila < tablero.length; fila++) {
    for (let columna = 0; columna < tablero[0].length; columna++) {
      /* Si la casilla no tiene mina.*/
      if (tablero[fila][columna] != 'MINA') {
        /* Se guarda en la casilla el número de minas que tiene alrededor.*/
        tablero[fila][columna] = nMinasPos(tablero, fila, columna);
      }
    }
  }
}

/*Función que dibuja el tablero en una página web. */
function dibujaTablero(tablero) {
  let tableroDiv = document.getElementById('tablero');
  /*Las siguientes propiedades sirven para que el tablero quede mejor reflejado visualmente en pantalla. */
  document
    .querySelector('html')
    .style.setProperty('--num-filas', tablero.length);
  document
    .querySelector('html')
    .style.setProperty('--num-columnas', tablero[0].length);

  /* Se recorren las filas del tablero. */
  for (let fila = 0; fila < tablero.length; fila++) {
    /* Se recorren las columnas del tablero. */
    for (let columna = 0; columna < tablero[0].length; columna++) {
      /*Si la casilla tiene una mina muestra un icono de bomba. */
      if (tablero[fila][columna] == 'MINA') {
        tableroDiv.innerHTML += `<div>\u{1F4A3}</div>`;
      } else if (tablero[fila][columna] == 0) {
        tableroDiv.innerHTML += `<div></div>`;
        /*Si la casilla no contiene ninguna de las 2 anteriores muestra el contenido del tablero. */
      } else {
        tableroDiv.innerHTML += `<div>${tablero[fila][columna]}</div>`;
      }
    }
  }
}
