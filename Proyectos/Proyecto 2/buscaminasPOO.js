function Buscaminas() {
  this.nFilas;
  this.nColumnas;
  this.tablero;
  this.nMinas;

  /* Getter de nFilas.*/
  this.getN_Filas = function () {
    return this.nFilas;
  };

  /* Setter de nFilas.*/
  this.setN_Filas = function () {
    let filas = 0;
    do {
      filas = parseInt(
        prompt('Introduce las filas del tablero.')
      ); /* Pregunta por el número de filas que desea.*/
    } while (filas < 2 || filas > 20);
    /* Guarda el resultado dentro de nFilas.*/
    this.nFilas = filas;
  };

  /*Getter de nColumnas.*/
  this.getN_Columnas = function () {
    return this.nColumnas;
  };

  /*Getter de nColumnas.*/
  this.setN_Columnas = function () {
    /* Pregunta por el número de filas que desea.*/
    let columnas = 0;
    do {
      columnas = parseInt(prompt('Introduce las columnas del tablero.'));
    } while (columnas < 2 || columnas > 20);
    /* Guarda el resultado dentro de nColumnas.*/
    this.nColumnas = columnas;
  };

  /*Getter de tablero.*/
  this.getTablero = function () {
    return this.tablero;
  };

  /*Setter de tablero.*/
  this.setTablero = function () {
    this.tablero = [];

    for (let f = 0; f < this.getN_Filas(); f++) {
      /* En cada valor del array 'tablero' guardamos otro array para tener un array bidimensional.*/
      this.tablero[f] = [];
      for (let c = 0; c < this.getN_Columnas(); c++) {
        /*Y en cada valor, guardamos un 0.*/
        this.tablero[f][c] = 0;
      }
    }
    /* Al final almacenamos un array bidimensional en 'tablero' */
  };

  /*Getter de nMinas.*/
  this.getN_Minas = function () {
    return this.nMinas;
  };

  /*Setter de nMinas.*/
  this.setN_Minas = function () {
    /* Pregunta por el número de minas que desea.*/
    let minas = 0;
    do {
      minas = parseInt(prompt('Introduce las minas del tablero.'));
    } while (
      minas < (this.getN_Filas() * this.getN_Columnas()) / 3 ||
      minas > ((this.getN_Filas() * this.getN_Columnas()) / 3) * 2
    );
    this.nMinas = minas;
  };

  /*Este método coloca las minas sobre el tablero. */
  this.colocaMinas = function () {
    /*Variables que almacenan de manera aleatoria las minas. */
    let x = 0;
    let y = 0;
    for (let i = 0; i < this.getN_Minas(); i++) {
      do {
        x = parseInt(Math.random() * this.getN_Filas());
        y = parseInt(Math.random() * this.getN_Columnas());
      } while (this.getTablero()[x][y] == 'MINA');
      /*Cuando se encuentre una coordenada en la que no haya mina, se pondrá una. */
      this.getTablero()[x][y] = 'MINA';
    }
  };

  /* Este método cuenta las minas que hay alrededor.*/
  this.nMinasPos = function (fila, columna) {
    /*Esta variable muestra el número de minas que hay alrededor dependiendo del parametro recibido. */
    let numMinas = 0;

    for (let yFila = fila - 1; yFila <= fila + 1; yFila++) {
      for (let xColumna = columna - 1; xColumna <= columna + 1; xColumna++) {
        /*Comprobamos que la casilla está dentro del tablero. */
        if (
          yFila > -1 &&
          xColumna > -1 &&
          yFila < this.getTablero().length &&
          xColumna < this.getTablero()[0].length
        ) {
          if (this.getTablero()[yFila][xColumna] == 'MINA') {
            numMinas++;
          }
        }
      }
    }
    return numMinas;
  };

  this.colocaRelleno = function () {
    /*Se recorre el tablero entero,*/
    for (let fila = 0; fila < this.getTablero().length; fila++) {
      for (let columna = 0; columna < this.getTablero()[0].length; columna++) {
        /*Si no tiene mina. */
        if (this.getTablero()[fila][columna] != 'MINA') {
          this.getTablero()[fila][columna] = this.nMinasPos(fila, columna);
        }
      }
    }
  };

  /*Este método muestra el tablero relleno por completo. */
  this.dibujaTablero = function () {
    let tableroDiv = document.getElementById('tablero');
    /*Las siguientes propiedades sirven para que el tablero quede mejor reflejado visualmente en pantalla. */
    document
      .querySelector('html')
      .style.setProperty('--num-filas', this.getN_Filas());
    document
      .querySelector('html')
      .style.setProperty('--num-columnas', this.getN_Columnas());

    /* Se recorren las filas del tablero. */
    for (let fila = 0; fila < this.getN_Filas(); fila++) {
      /* Se recorren las columnas del tablero. */
      for (let columna = 0; columna < this.getN_Columnas(); columna++) {
        /*Si la casilla tiene una mina muestra un icono de bomba. */
        if (this.getTablero()[fila][columna] == 'MINA') {
          tableroDiv.innerHTML += `<div>\u{1F4A3}</div>`;
        } else if (this.getTablero()[fila][columna] == 0) {
          tableroDiv.innerHTML += `<div></div>`;
          /*Si la casilla no contiene ninguna de las 2 anteriores muestra el contenido del tablero. */
        } else {
          tableroDiv.innerHTML += `<div>${
            this.getTablero()[fila][columna]
          }</div>`;
        }
      }
    }
  };
  /*Este método llama a los demás métodos e inicializa */
  this.jugar = function () {
    this.setN_Filas();
    this.setN_Columnas();

    /*Creamos el tablero */
    this.setTablero();

    this.setN_Minas();

    /*Se colocan las minas sobre el tablero */
    this.colocaMinas();

    /*Rellenamos las casilas */
    this.colocaRelleno();

    /*Mostramos el tablero por pantalla */
    this.dibujaTablero();
  };
}

function mostrarBuscaminas() {
  let buscaminas = new Buscaminas();
  buscaminas.jugar();
}
