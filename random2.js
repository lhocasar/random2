//Math.random() devuelve número aleatorio entre 0 y 1.
var numero = Math.random();

var mensaje = ' MAYOR que 0,5 \n';

if (numero <= 0.5)
  mensaje =' MENOR que 0,5 \n';

 console.log('\n' + numero + mensaje);
