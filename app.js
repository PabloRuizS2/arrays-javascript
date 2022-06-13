//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, color, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }
}

//Inicializo arrays para las categorias de los productos
const perifericos = [];
const componentes = [];
const notebooks = [];

//Cargo el stock de productos segun su categoria
//perifericos
perifericos.push(new Producto("mouse razer", 1, 4000, "Negro", 30));
perifericos.push(new Producto("auriculares logitech", 2, 7400, "Blanco", 10));
perifericos.push(new Producto("teclado corsair", 3, 9000, "negro", 20));
perifericos.push(new Producto("auricular hyperx", 4, 11000, "rojo", 15));
//componentes
componentes.push(new Producto("procesador ryzen5", 5, 50000, "Negro", 20));
componentes.push(new Producto("tarjeta grafica 5500", 6, 10000, "Negro", 40));
componentes.push(new Producto("memoria ram 16gb", 7, 7000, "Negro", 40));
//notebooks
notebooks.push(new Producto("notebook asus", 8, 180000, "Negro", 10));
notebooks.push(new Producto("notebook samsung", 9, 130000, "blanca", 10));


//Recorro los arrays para mostrarle los productos al usuario
for (const periferico of perifericos) {
    alert("ID (" + periferico.id + ") - " + periferico.nombre);
}
for (const componente of componentes) {
    alert("ID (" + componente.id + ") - " + componente.nombre);
}
for (const notebook of notebooks) {
    alert("ID (" + notebook.id + ") - " + notebook.nombre);
}

//Solicito al usuario el ID de la prenda
let productoSeleccionada = parseInt(prompt("Ingrese el ID de la producto que desea comprar:"));
const perifericoBuscada = perifericos.find(periferico => periferico.id === productoSeleccionada);
const componenteBuscado = componentes.find(componente => componente.id == productoSeleccionada);
const notebookBuscado = notebooks.find(notebook => notebook.id == productoSeleccionada);

if (productoSeleccionada <= 0) {
    alert("Ingresa un ID valido");
} else if (productoSeleccionada <=4) {
    alert("Seleccionaste " +  perifericoBuscada.nombre + "\nToca aceptar para agregarlo a tu carrito"); 
} else if (productoSeleccionada <=7) {
    alert("Seleccionaste " + componenteBuscado.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else if (productoSeleccionada <= 9) {
    alert("Seleccionaste " + notebookBuscado.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else {
    alert("Ingresa un ID valido");
}







