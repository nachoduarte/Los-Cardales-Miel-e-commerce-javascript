//DECLARACION DE FUNCIONES

//Suma de productos 
const suma = (a,b,c,d,e) => a + b + c + d + e;

//Plantilla html para interfaz de carrito
function componenteCarrito(articulo){
    return `<div class="dropdown-menu--display"><img src="${articulo.imagen}" width=60>
                <h4>${articulo.nombre} $${articulo.precio}</h4>
                <p><span class="badge btn-dark">${articulo.cantidad}</span></p>
                <p><b>subtotal: $ ${articulo.subtotal()}</b></p>
                <a id="${articulo.id}" class="btn btn-info btn-add">+</a>
                <a id="${articulo.id}" class="btn btn-danger btn-sub">-</a>
                <button type="button" class="btn btn-warning btn-delete">x</button>
            </div>`
}


//Interfaz de carrito
function carritoUI(articulos){
    $("#carritoCantidad").html(articulos.length);
    $("#carritoProductos").empty();
    for (const articulo of articulos){
        $("#carritoProductos").append(componenteCarrito(articulo));
    } 
    $(".btn-delete").on("click", eliminarCarrito);
    $(".btn-add").click(addCantidad);
    $(".btn-sub").click(subCantidad);
    //Evitar propagacion
    $(".dropdown-menu").click(function (e){
        e.stopPropagation();
    })
}

//Manejador de compra
function comprarManejador(event){
    event.preventDefault();
    const articuloID = event.target.id
    const seleccionado = compra.find(articulo => articulo.id == articuloID);
    if(seleccionado == undefined){
        compra.push(articulos.find(articulo => articulo.id == articuloID));
    }else{
        seleccionado.agregarCantidad(1);
    }
    console.log(compra);
    localStorage.setItem("COMPRA", JSON.stringify(compra));
    carritoUI(compra);
    
}

//Funcion eliminar carrito
function eliminarCarrito(e){
    let position = compra.findIndex(articulo => articulo.id == e.target.id);
    delete compra[position];
    compra.splice(position,1);
    localStorage.setItem("COMPRA", JSON.stringify(compra));
    carritoUI(compra);

}

//Manejador para agregar cantidad 
function addCantidad(){
    let articulo = compra.find(a => a.id == this.id);
    articulo.agregarCantidad(1);
    $(this).parent().children()[2].innerHTML = `<p><span class="badge btn-dark">${articulo.cantidad}</span></p>`
    $(this).parent().children()[3].innerHTML = `<p><b>subtotal: $ ${articulo.subtotal()}</b></p>`

    localStorage.setItem("COMPRA", JSON.stringify(compra));
}
//Manejador para restar cantidad
function subCantidad(){
    let articulo = compra.find(a => a.id == this.id);
    if(articulo.cantidad > 1){
        articulo.agregarCantidad(-1);
        let registroUI = $(this).parent().children();
        registroUI[2].innerHTML = `<p><span class="badge btn-dark">${articulo.cantidad}</span></p>`
        registroUI[3].innerHTML =`<p><b>subtotal: $ ${articulo.subtotal()}</b></p>`
        localStorage.setItem("COMPRA", JSON.stringify(compra));
    }
}

console.dir(document.getElementById("carritoProductos"));