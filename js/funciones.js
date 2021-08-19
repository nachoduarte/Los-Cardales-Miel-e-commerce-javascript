//DECLARACION DE FUNCIONES

//Plantilla html para interfaz de articulo 

function articulosUI(articulos, id){
    $(id).empty();
    for (const articulo of articulos) {
        $(id).append(
            '<div class="card" style="width: 18rem;"> ' +
            '<img src="' + articulo.imagen + '" class="card-img-top" alt="...">' +
                '<div class="card-body">' +
                '<h5 class="card-title">' + articulo.nombre + '</h5>' +
                '<p class="card-text"> Precio $ ' + articulo.precio + '.</p> </div>' +
                '<div class="card-body">' +
                '<button id=' + articulo.id + ' type="button" class="btn btn-warning btnAgregar">Agregar al carrito</button>' +
                ' </div> </div>'
        );
    }
}

//Plantilla html para interfaz de carrito
function componenteCarrito(articulo){
    return `<div class="dropdown-menu--display"><img src="${articulo.imagen}" width=45>
                <h4>${articulo.nombre} $${articulo.precio}</h4>
                <p><span class="badge btn-dark">${articulo.cantidad}</span></p>
                <p><b>subtotal: $ ${articulo.subtotal()}</b></p>
                <a id="${articulo.id}" class="btn btn_compra--style btn-add">
                <img src="./imagenes/plus-circle.svg" width=20>
                </a>
                <a id="${articulo.id}" class="btn btn_compra--style btn-sub">
                <img src="./imagenes/minus-circle.svg" width=20>
                </a>
                <button type="button" class="btn btn_compra--style btn-delete">
                <img src="./imagenes/x-circle.svg" width=20>
                </button>
            </div>`
}


//Interfaz de carrito
function carritoUI(articulos){
    $("#carritoCantidad").html(articulos.length);
    $("#carritoProductos").empty();
    for (const articulo of articulos){
        $("#carritoProductos").append(componenteCarrito(articulo));
    } 
    //Agregar TOTAL
    $('#carritoProductos').append(`<p class="fontThin" id="totalCarrito"> Total $${totalCarrito(compra)}</p>`);
    //Confirmacion de compra
    if (compra != ''){
        $('#carritoProductos').append(`<div id="divConfirmar" class="text-center"><button class="btn btn-warning" id="btnConfirmar">Comprar <img src="./imagenes/check-circle.svg"></button></div>`);
    }
    //Asociacion de eventos
    $(".btn-delete").on("click", eliminarCarrito);
    $(".btn-add").click(addCantidad);
    $(".btn-sub").click(subCantidad);
    $("#btnConfirmar").click(confirmarCompra);
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
    //Modificar total 
    $("#totalCarrito").html(`Total $${totalCarrito(compra)}`);
    //guardado en storage
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
        //Modificar total
        $("#totalCarrito").html(`Total $${totalCarrito(compra)}`);
        //guardado en storage
        localStorage.setItem("COMPRA", JSON.stringify(compra));
    }else if(articulo.cantidad == 1){
        compra.splice(articulo,1);
        $("#totalCarrito").html(`Total $${totalCarrito(compra)}`);
        localStorage.setItem("COMPRA", JSON.stringify(compra));
        carritoUI(compra);
    }
}

console.dir(document.getElementById("carritoProductos"));


function totalCarrito(compra) {
    let total = 0;
    compra.forEach(p => total += p.subtotal());
    return total.toFixed(2);
}

function confirmarCompra(){
    $("#btnConfirmar").animate({opacity:0.5},100)
        .fadeOut("slow");
    $('#divConfirmar').append(`<div class="spinner-border text-success" role="status">
                                <span class="sr-only"></span>
                             </div>`);
    //Envio de datos de compra
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const DATA = {articulos: JSON.stringify(compra), total: totalCarrito(compra)}
    $.post(URL, DATA, function(respuesta, estado){
        if(estado == 'success'){
            $('#divConfirmar').fadeOut(2000);
            $("#notificaciones").html(`<div>Compra confirmada! Comprobante Nº ${respuesta.id}.</div>
                                        <div>Total de tu compra: $${respuesta.total}</div>`).css({backgroundColor: "#d48415"})
                        .stop(false, true)
                            .fadeIn("fast")
                                .delay(4000)
                                    .fadeOut(2000);
            compra.splice(0, compra.length);
            localStorage.setItem("COMPRA", '[]');
            $('#carritoProductos').empty();
            $('#carritoCantidad').html(0);
        }
    })
}