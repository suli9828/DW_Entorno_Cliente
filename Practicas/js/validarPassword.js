//Ponemos las variables que contendrán los caracteres que serán aceptados.
const minusculas = "aáàbcçdeéèfghiìíjklmnñoóòpqrstuùúüvwxyz";
const mayusculas = "AÁÀBCÇDEÉÈFGHIÍÌJKLMNÑOÓÒPQRSTUÚÙÜVWXYZ";
const numeros = "0123456789";
const caracteres = "!@#$%&?¿¡<> ;,:.*+-_";

// Comprobamos el usuario.
let isUsuario = true;
do {
  var usuario = prompt("Introduce tu nombre de usuario:");

  // Si le damos a "cancelar", se cancela el proceso.
  if (usuario === null) {
    document.write("Has cancelado el proceso");
  }

  // Comprueba que el usuario al menos tenga una minuscula y un numero.
  for (let i = 0; i < usuario.length; i++) {
    if (!minusculas.includes(usuario.charAt(i))) {
      if (!numeros.includes(usuario.charAt(i))) {
        isUsuario = false;
      }
    }
  }

  // Le dice al usuario si el nombre es correcto o no.
  if (isUsuario == false) {
    alert("Nombre de usuario no válido. Vuelve a introducirlo.");
  } else {
    alert("El usuario '" + usuario + "' es válido.");
  }

  // Ejecutará todo lo anterior mientras que el usuario no sea válido.
} while (isUsuario == false);

// Comprobamos la contraseña.
let isPassword = true;
do {
  var password = prompt("Introduce la contraseña:");

  // Si le damos a "cancelar" se cancela el proceso.
  if (password === null) {
    document.write("Has cancelado el proceso");
  }

  let numerosPassword = 0;
  let minusculasPassword = 0;
  let mayusculasPassword = 0;
  let caracteresPassword = 0;

  // Comprueba que cada caracter que esté incluido en la contraseña sea válido.
  for (let i = 0; i < password.length; i++) {
    if (!minusculas.includes(password.charAt(i))) {
      if (!mayusculas.includes(password.charAt(i))) {
        if (!numeros.includes(password.charAt(i))) {
          if (!caracteres.includes(password.charAt(i))) {
            isPassword = false;
          } else {
            caracteresPassword++;
          }
        } else {
          numerosPassword++;
        }
      } else {
        mayusculasPassword++;
      }
    } else {
      minusculasPassword++;
    }
  }

  // Si los caracteres de la contraseña no corresponden a los que se piden, no será válida.
  if (minusculasPassword == 0 || mayusculasPassword == 0 || numerosPassword == 0 || caracteresPassword == 0) {
    isPassword = false;
  }

  // Le dice al usuario si la contraseña está bien escrita o no.
  if (isPassword == false) {
    alert("Contraseña no válida. Vuelve a introducirla.");
  } else {
    alert("Contraseña correcta. Se han guardado los datos.");
  }

  // Ejecutará todo lo anterior mientras que la contraseña no sea válida.
} while (isPassword == false);

document.write("Usuario: " + usuario + "<br/>" + "Contraseña: " + password);
