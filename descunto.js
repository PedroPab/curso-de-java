// const precioOriginal = 12+00
// const descunto = 15

function calcularPrecioDescunto(precio , descuento){
    const porsentsjePrecioDescunto = 100 -  descuento
    const precioDescunto = (precio * porsentsjePrecioDescunto) / 100
    return precioDescunto;
}

function calcularDescuntoProductos(){
    const inputPrice = parseInt(document.getElementById("inputPricioPoducto").value);
    const inputDescunto = parseInt(document.getElementById("inputDescuentoProducto").value);
    
    const precioConDescunto = calcularPrecioDescunto(inputPrice, inputDescunto);

    const priceP = document.getElementById("priceParrafo");
    priceP.innerText = "El precio con descunto son : $" + precioConDescunto;

}

// console.log({
//     precioOriginal,
//     descunto,
//     porsentsjePrecioDescunto,
//     precioDescunto,
// })