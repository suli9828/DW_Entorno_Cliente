let lastId = 1;

/*Esta función crea una fila nueva al final de la tabla. */
function addFila() {
  /* Comprueba que el campo no esté vacío. */
  if (document.getElementById('texto').value != '') {
    let tr = document.createElement('tr');
    lastId += 1; /*El id de aumenta en 1. */
    /* En la primera columna aparece el texto introducido.*/
    tr.innerHTML =
      "<td id='fila" +
      lastId +
      "'>" +
      document.getElementById('texto').value +
      '</td>';
    /* En la segunda columna aparece el botón que hace que el texto se transforme en mayúsculas. */
    tr.innerHTML +=
      "<td><button onclick='mayusculas(`fila" +
      lastId +
      "`)'>Mayúsculas</button></td>";
    /*En la tercera columna aparece el botón que transforma el texto a otro formato. */
    tr.innerHTML +=
      "<td><button onclick='formatoChachi(`fila" +
      lastId +
      "`)'>Formato chachi</button></td>";
    let table = document.getElementsByTagName('tbody')[0];
    table.appendChild(tr);
    /*Se añade la nueva al final de la tabla. */
  }
}

/* Esta función transforma el texto en mayúsculas.*/
function mayusculas(id) {
  document.getElementById(id).classList.toggle('mayusculas');
}

/* Esta función transforma el texto a otro formato.*/
function formatoChachi(id) {
  document.getElementById(id).classList.toggle('cambiaFormato');
}
