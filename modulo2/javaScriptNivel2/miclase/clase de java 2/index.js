/*function evaluarParidad() {
    //const repeticiones = prompt('Cuantos numeros desea evaluar');

    let contador = 0;

    while (contador < 1) {

        const numero = prompt('Ingrese un numero para evaluar su paridad');

        const esPar = parseInt(numero) % 2 === 0;

        if (numero === null) {
            alert('no se un numero valido');
            
        }
        if (esPar) {
            alert('el numero ingresado es par');
        }
        else {
            alert('el numero ingresado es impar');
        }

        contador++;

    }

        
    }*/

    /*const array = ['uno' , 'dos' , 'tres'];

console.log(array);
console.log(array.length);
for (let index = 0; index < array.length; index++) {
    const numero = array[index];
    console.log(numero);
}*/

function evaluar10Numeros() {
    let cantidadDeNegativos = 0
    let cantidadDePositivos = 0
    let cantidadDeMultiplos15 = 0
    let acumladorDePares = 0

    for (let contador = 0; contador < 10; contador++) {
        const numero = prompt('ingrese un numero entero')
        const esNegativo = numero < 0
        const esMultiploDe15 = parseInt(numero) % 15 === 0
        if (esNegativo) {
            cantidadDeNegativos = cantidadDeNegativos + 1
        } else {
            cantidadDePositivos = cantidadDePositivos + 1
        }
        if (esMultiploDe15) {
            cantidadDeMultiplos15 += 1
        }
        if (parseInt(numero) % 2 === 0) {
            acumuladorDePares = acumladorDePares + parseInt(numero)
        }
    }

    console.log('La cantidad de negativos es: ' + cantidadDeNegativos);
    console.log('La cantidad de positivos es: ' + cantidadDePositivos);
    console.log('La cantidad de multiplos de 15 es:' + cantidadDeMultiplos15);
    console.log('La suma de los numeros pares es: ' + acumladorDePares );
}

