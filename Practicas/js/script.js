var i, j; /* Declarar las variables */

      var filas = Number(prompt("Número de filas")); /* Pedir número de filas */
      var columnas = Number(prompt("Número de columnas")); /* Pedir número de columnas */

      var res = filas * columnas; /* Multiplicar el numero de filas por las columnas. */

      document.write("<table border>"); /* Mostrar la base de la tabla. */

      /* Generar el bucle de las filas. */
      for (i = 0; i < filas; i++) {
        document.write("<tr>"); /* Mostrar las filas. */

        /* Generar el bucle de las columnas. */
        for (j = 0; j < columnas; j++) {
          document.write("<td>"); /* Mostrar las columnas. */
                document.write("</td>"); /* Cerrar las columnas. */
        }
        document.write("</tr>"); /* Cerrar las filas. */
    }
    document.write("</table>"); /* Cerrar la tabla. */
