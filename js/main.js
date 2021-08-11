 
 $(document).ready(function() {
    
    //Definicion de eventos posterior a la carga de la interfaz
     const botonAgregar = $('.btnAgregar');

     for (const boton of botonAgregar) {
         boton.addEventListener("click", comprarManejador);
         
    }

    //Carga de datos de usuario en interfaz carrito
    if ("COMPRA" in localStorage){
        const datosCompra = JSON.parse(localStorage.getItem("COMPRA"));
        for (const iterator of datosCompra) {
            compra.push(new Articulo(iterator.id, iterator.nombre, iterator.precio, iterator.imagen, iterator.cantidad));
        }
        carritoUI(compra);
    }else{
        $("#carritoProductos").append('<p class="fontThin">Todavía no agregaste nada!</p>');
    }

    //Evitar propagacion
    $(".dropdown-menu").click(function (e){
        e.stopPropagation();
    })


})

window.addEventListener('load', () => {
    $("#indicador").remove();
    
    
})

//PUSH de articulos al array de objetos

articulos.push(new Articulo(1, "Caramelos x50 unidades", 100, "./imagenes/caramelos.jpg", 0));
articulos.push(new Articulo(2, "Miel de 250gr", 115, "./imagenes/mielcuarto.jpg", 0));
articulos.push(new Articulo(3, "Miel de 500gr", 225, "./imagenes/mielmedio.jpg", 0));
articulos.push(new Articulo(4, "Miel de 1 kilo", 450, "./imagenes/mielkilo.jpg", 0));

//INTERFAZ HTML DE TIENDA

let tienda = document.getElementById("tienda");
for (const articulo of articulos) {   
    let divProducto = document.createElement("div");
    divProducto.innerHTML = '<div class="card" style="width: 18rem;"> '+ 
                                '<img src="'+articulo.imagen+'" class="card-img-top" alt="...">' +
                                '<div class="card-body">'+ 
                                    '<h5 class="card-title">'+articulo.nombre+'</h5>' +
                                    '<p class="card-text"> Precio $ '+articulo.precio+'.</p> </div>' + 
                                '<div class="card-body">' +
                                    '<button id='+articulo.id+' type="button" class="btn btn-warning btnAgregar">Agregar al carrito</button>'+
                                ' </div> </div>'
    tienda.appendChild(divProducto);
}








