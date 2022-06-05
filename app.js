function calcularPrecio (precioProducto, cantidadProducto, porcentajeDescuento, costoEnvio) {
    
    let descuento = (precioProducto * porcentajeDescuento) / 100;
    
    let precioConDescuento = precioProducto - descuento;
    
    return (precioConDescuento * cantidadProducto) + costoEnvio;
}

const envio = 800; 


let producto = parseFloat(prompt("Ingrese el precio del producto que desea comprar:"));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar:"));
let descuento = parseInt(prompt("Ingresa tu cupón de descuento:")) 


let precioFinal = calcularPrecio(producto, cantidad, descuento, envio);
alert("El precio total de tu compra es $" + precioFinal);
alert("¡Que lo disfrutes!");








