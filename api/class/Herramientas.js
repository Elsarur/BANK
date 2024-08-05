//calcular los numero de cuentas
//calcular los numero de tarjeta
//calcular CVV
//Creacion fecha de expiracion 

// Función para generar un número aleatorio de una longitud específica
function generarNumeroAleatorio(longitud) {
    let resultado = '';
    const caracteres = '0123456789';
    for (let i = 0; i < longitud; i++) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return resultado;
}






















// Generar un número de cuenta de 16 dígitos
const numeroCuenta = generarNumeroAleatorio(16);
console.log('Número de Cuenta:', numeroCuenta);

// Generar un número de tarjeta de 16 dígitos
const numeroTarjeta = generarNumeroAleatorio(16);
console.log('Número de Tarjeta:', numeroTarjeta);

// Generar un CVV de 3 dígitos
const cvv = generarNumeroAleatorio(3);
console.log('CVV:', cvv);