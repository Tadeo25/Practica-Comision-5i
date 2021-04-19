function calcularPromedio() {
    const notas = []
    let suma = 0
    const notaParcial1 = prompt('ingrese nota del primer parcial')
    const notaParcial2 = prompt('ingrese nota del segundo parcial')
    const notaProyectoFinal = prompt('ingrese nota del proyecto final')

    notas.push(notaParcial1);
    notas.push(notaParcial2);
    notas.push(notaProyectoFinal);

    for (let index = 0; index < notas.length; index++) {
        //const element = notas[index];
        //suma = suma + element
        suma = suma + notas[index]
    }

    const promedio = suma / notas.length;

    if (promedio >= 6) {
        console.log('Aprobo la materia')
    } else{
        console.log('Desaprobo la materia')
    }
}

    function calcularAprobados() {
        const cantidadDeAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos'))
        const notas = [];
        let cantidadDeAprobados = 0;

        for (let i = 0; i < cantidadDeAlumnos; i++) {
            const nota = parseInt(prompt('Ingrese una nota'))
            notas.push(nota)
        }

        for (let i = 0; i < notas.length; i++) {
            const nota = notas[i];
            if (nota >= 6) {
                cantidadDeAprobados += 1
            }
        }
        console.log('Del total de alumnos' + cantidadDeAlumnos + ',La cantidad de aprobasdos es 👍' + cantidadDeAprobados);
    }
    

    const productos = [ 

        { nombre:'manzana' , precio: 10 } , 
        { nombre:'pera' , precio: 20 } , 
        { nombre:'banana' , precio: 30 } 

];

    const compras = [];

    let sumaDeCompras = 0; 

    function agregarProductos() {

        const nombre = prompt('Ingrese nombre para el producto 🍎');
        const precio = parseFloat(prompt('Ingrese un precio para el producto 📠'));
        const producto = { nombre: nombre , precio: precio };

        productos.push(producto)
        console.log(productos)

    }

    function mostrarProductos() {
        console.log(productos);
    }

    function seleccionaProducto() {
        const codigo = parseInt(prompt('Ingrese el codigo del producto'));
        compras.push(codigo)
        console.log("seleccionaProducto → compras", compras)
    }

    function calcularTotal() {
        
        for (let i = 0; i < compras.length; i++) {
            const codigo = compras[i]
            const producto = productos[codigo]
        console.log("calcularTotal → producto", producto)
        sumaDeCompras += (producto.precio);

            
        }
    }