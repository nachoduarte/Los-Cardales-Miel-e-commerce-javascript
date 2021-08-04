 

//PUSH de articulos al array de objetos

articulos.push(new Articulo(1, "Caramelos x50 unidades", 100, 10, "./imagenes/caramelos.jpg"));
articulos.push(new Articulo(2, "Miel de 250gr", 115, 10, "./imagenes/mielcuarto.jpg"));
articulos.push(new Articulo(3, "Miel de 500gr", 225, 10, "./imagenes/mielmedio.jpg"));
articulos.push(new Articulo(4, "Miel de 1 kilo", 450, 10, "./imagenes/mielkilo.jpg"));

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

//EVENTOS DE PRODUCTOS
const botonAgregar = document.getElementsByClassName("btnAgregar");

for (const boton of botonAgregar){
    boton.addEventListener("click", comprarManejador);
}






