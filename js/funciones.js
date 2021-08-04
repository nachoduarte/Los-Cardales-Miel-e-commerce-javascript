//DECLARACION DE FUNCIONES

//Suma de productos 
const suma = (a,b,c,d,e) => a + b + c + d + e;

//Plantilla html para interfaz de carrito
function componenteCarrito(articulo){
    return `<div><img src="${articulo.imagen}" width=60><p>${articulo.nombre} $${articulo.precio}</p><button type="button" class="btn btn-warning">x</button></div>`
}


//Interfaz de carrito
function carritoUI(articulos){
    $("#carritoCantidad").html(articulos.length);
    $("#carritoProductos").empty();
    for (const articulo of articulos){
        $("#carritoProductos").append(componenteCarrito(articulo));
    } 
}

//Manejador de compra
function comprarManejador(event){
    const articuloID = event.target.id
    const seleccionado = articulos.find(articulo => articulo.id == articuloID);
    compra.push(seleccionado);
    console.log(compra);
    localStorage.setItem("compra", JSON.stringify(compra));
    carritoUI(compra);

}
