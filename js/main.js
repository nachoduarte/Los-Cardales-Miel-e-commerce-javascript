 $(document).ready(function () {


     //Carga de datos de usuario en interfaz carrito
     if ("COMPRA" in localStorage) {
         const datosCompra = JSON.parse(localStorage.getItem("COMPRA"));
         for (const iterator of datosCompra) {
             compra.push(new Articulo(iterator.id, iterator.nombre, iterator.precio, iterator.imagen, iterator.cantidad));
         }
         carritoUI(compra);
     } else {
         $("#carritoProductos").append('<p class="fontThin">Todavía no agregaste nada!</p>');
     }

     //Evitar propagacion
     $(".dropdown-menu").click(function (e) {
         e.stopPropagation();
     })

     $("#headerLoad").fadeIn("fast");
    
    //Carga de productos por archivo json
    const URLGET = "./objects.json"; 
    $.get(URLGET, function (datos, estado) {
        if(estado == "success") {
            for(const iterator of datos){
                articulos.push(new Articulo(iterator.id, iterator.nombre, iterator.precio, iterator.imagen, iterator.cantidad));
            }
        }
            //INTERFAZ HTML DE TIENDA GENERADA POR FUNCION
            articulosUI(articulos, '#tienda');
                //Definicion de eventos posterior a la carga de la interfaz
                const botonAgregar = $('.btnAgregar');

                for (const boton of botonAgregar) {
                    boton.addEventListener("click", comprarManejador);
                    
                }
                
            //Animacion para selector de articulos

            $(".btnAgregar").click(function (e) {
                        e.preventDefault();
                        $(this).fadeOut(400)
                            .animate({
                                opacity: 0.9,
                                
                            })
                            .css("background-color", "#d48415")
                            .delay(300)
                            .fadeIn(400);


                        $("#carritoCantidad").fadeOut(400)
                            .delay(200)
                            .fadeIn(400);

            });
    })

 })

 window.addEventListener('load', () => {
     $("#indicador").remove();
     $("#bodyLoad").fadeIn("slow");

 })



//Animacion dropdown carrito 
 $("#dropdownMenuLink").click(function (e) {
     e.preventDefault();
     $("#carritoProductos").slideToggle();

 });



