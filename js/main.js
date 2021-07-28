 
//DECLARACION DE OBJETOS
function Articulo(id, nombre, precio, cantidad, imagen){
    this.id=id;
    this.nombre=nombre;
    this.precio=precio;
    this.cantidad=cantidad;
    this.imagen=imagen;
    this.vender = function (cantidad){
        this.cantidad -= cantidad;
    }
    this.reponer = function (cantidad){
        this.cantidad += cantidad;
    }
}
//DECLARACION DE ARRAYS
const articulos = [];
articulos.push(new Articulo(1, "Caramelos x50 unidades", 100, 10, "./imagenes/caramelos.jpg"));
articulos.push(new Articulo(2, "Miel de 250gr", 115, 10, "./imagenes/mielcuarto.jpg"));
articulos.push(new Articulo(3, "Miel de 500gr", 225, 10, "./imagenes/mielmedio.jpg"));
articulos.push(new Articulo(4, "Miel de 1 kilo", 450, 10, "./imagenes/mielkilo.jpg"));

const compra = [];

var costoEnvio = 150;
var carrito = 1;

//DECLARACION DE FUNCIONES
const solicitarArticulo = function(){
    return prompt("Ingrese el articulo deseado.\nPuede solicitar un máximo de 4 artículos")
}

const suma = (a,b,c,d,e) => a + b + c + d + e;

//LISTA DE PRODUCTOS
let lista = "LISTA DE PRECIOS";
 for (let index = 0; index < articulos.length; index++) {
     lista += "\n" + "N° " + articulos[index].id + " Nombre: " + articulos[index].nombre + " Precio: $" + articulos[index].precio; 
 }

alert(lista);

//SOLICITAR PRODUCTOS
/*
let estaCompra = solicitarArticulo();

while (carrito <= 4){
    if (estaCompra == "caramelos de propoleo"){
        compra.push(estaCompra);
        articulos[0].vender(1);
        carrito =(carrito + 1);
        alert("Compraste " + articulos[0].nombre + " por $" + articulos[0].precio + " x 50 unidades");
    }else if (estaCompra == "miel de cuarto kilo"){
        compra.push(estaCompra);
        articulos[1].vender(1);
        carrito = (carrito + 1);
        alert("Compraste " + articulos[1].nombre + " por $" + articulos[1].precio);
    }else if (estaCompra == "miel de medio kilo"){
        compra.push(estaCompra);
        articulos[2].vender(1);
        carrito = (carrito + 1);
        alert("Compraste " + articulos[2].nombre + " por $" + articulos[2].precio);
    }else if (estaCompra == "miel de kilo"){
        compra.push(estaCompra);
        articulos[3].vender(1);
        carrito = (carrito + 1);
        alert ("Compraste " + articulos[3].nombre + " por $" + articulos[3].precio);
    }else{
        alert("El producto solicitado no se encuentra en stock");
    }
    estaCompra = solicitarArticulo();


    console.log(articulos[0].cantidad);
    console.log(articulos[1].cantidad);
    console.log(articulos[2].cantidad);
    console.log(articulos[3].cantidad);

    articulos[0].reponer(1);
    articulos[1].reponer(1);
    articulos[2].reponer(1);
    articulos[3].reponer(1);

}
*/

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
                                    '<button type="button" class="btn btn-warning btnAgregar">Agregar al carrito</button>'+
                                ' </div> </div>'
    tienda.appendChild(divProducto);
}

//EVENTOS DE PRODUCTOS
const botonAgregar = document.getElementsByClassName("btnAgregar");

botonAgregar[0].addEventListener('click', () => {
    compra.push(articulos[0]);
});
botonAgregar[1].addEventListener('click', () => {
    compra.push(articulos[1]);
});
botonAgregar[2].addEventListener('click', () => {
    compra.push(articulos[2]);
});
botonAgregar[3].addEventListener('click', () => {
    compra.push(articulos[3]);
});


console.log(carrito);
console.log(compra);


let sumaProductos = suma(articulos[0].precio, articulos[1].precio, articulos[2].precio, articulos[3].precio, costoEnvio);


//SALIDAS FINALES
console.log(articulos[0].cantidad);
console.log(articulos[1].cantidad);
console.log(articulos[2].cantidad);
console.log(articulos[3].cantidad);

console.log(sumaProductos);


alert("Caramelos de propoleo $ " + articulos[0].precio + "\n " +
      "Miel de cuarto kilo $ " + articulos[1].precio + "\n " + 
      "Miel de medio kilo $ " + articulos[2].precio + "\n " +
      "Miel de kilo $ " + articulos[3].precio + "\n " +
      "costo de envío $ " + costoEnvio + "\n " + 
      "TOTAL $ " + sumaProductos);


