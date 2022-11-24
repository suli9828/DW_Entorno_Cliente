function jsonToMap(json) {
  let obj = JSON.parse(json);
  let array = Object.entries(obj);
  let map = new Map(array);
  return map;
}

let miJSON = `{"idPedido":"faa-8444","pedidos":[{"idProducto":"info005","nombre":"Placa_Arduino_one","destinoPostal":"abarcable"},{"idProducto":"info041","nombre":"Placa_Raspberry_3","destinoPostal":"No abarcable"},{"idProducto":"gadget024","nombre":"usb_Multi_5puertos","destinoPostal":"abarcable"}]}`;

const map = jsonToMap(miJSON);

document.write('<table>');
document.write('<tr>');
document.write(
  '<th class="idPedido"><em>' + map.get('idPedido') + '</em></th>'
);
document.write('<th>Producto</th>');
document.write('<th>Nombre</th>');
document.write('<th>Destino</th>');
document.write('</tr>');
for (let i = 0; i < map.get('pedidos').length; i++) {
  document.write('<tr>');
  document.write(`<td class="productos">Producto ${i}</td>`);
  document.write(`<td>${map.get('pedidos')[i].idProducto}</td>`);
  document.write(`<td>${map.get('pedidos')[i].nombre}</td>`);
  document.write(`<td>${map.get('pedidos')[i].destinoPostal}</td>`);
  document.write('</tr>');
}
document.write('</table>');
