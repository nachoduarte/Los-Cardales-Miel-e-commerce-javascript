 

var caramelos = 100;
var mielCuarto = 115;
var mielMedio = 225;
var mielKilo = 450;



function Articulo(id, nombre, precio, cantidad){
    this.id=id;
    this.nombre=nombre;
    this.precio=precio;
    this.cantidad=cantidad;
    this.vender = function (cantidad){
        this.cantidad -= cantidad;
    }
    this.reponer = function (cantidad){
        this.cantidad += cantidad;
    }
}

const articulo1 = new Articulo(1, "Caramelos", 100, 10);
const articulo2 = new Articulo(2, "Miel 1/4", 115, 10);
const articulo3 = new Articulo(3, "Miel 1/2", 225, 10);
const articulo4 = new Articulo(4, "Miel kilo", 450, 10);

let costoEnvio = 150;

const solicitarArticulo = function(){
    return prompt("Ingrese el articulo deseado")
}

const suma = (a,b,c,d,e) => a + b + c + d + e;

alert("LISTA DE PRECIOS" + "\n " +
         articulo1.nombre + ": $" + articulo1.precio + " x 50 unidades" + "\n " + 
         articulo2.nombre + ": $" + articulo2.precio + "\n " +
         articulo3.nombre + ": $" + articulo3.precio + "\n " +
         articulo4.nombre + ": $" + articulo4.precio);

console.log(articulo1);
console.log(articulo2);
console.log(articulo3);
console.log(articulo4);

let articuloIngresado1 = solicitarArticulo();

if (articuloIngresado1 == "caramelos de propoleo"){
    articulo1.vender(1);
    alert("Compraste " + articulo1.nombre + " por $" + articulo1.precio + " x 50 unidades");
}else if (articuloIngresado1 == "miel de cuarto kilo"){
    articulo2.vender(1);
    alert("Compraste " + articulo2.nombre + " por $" + articulo2.precio);
}else if (articuloIngresado1 == "miel de medio kilo"){
    articulo3.vender(1);
    alert("Compraste " + articulo3.nombre + " por $" + articulo3.precio);
}else if (articuloIngresado1 == "miel de kilo"){
    articulo4.vender(1);
    alert("Compraste " + articulo4.nombre + " por $" + articulo4.precio);
}else{
    alert("El producto solicitado no se encuentra en stock");
}



let articuloIngresado2 = solicitarArticulo();

if (articuloIngresado2 == "caramelos de propoleo"){
    articulo1.vender(1);
    alert("Compraste " + articulo1.nombre + " por $" + articulo1.precio + " x 50 unidades");
}else if (articuloIngresado2 == "miel de cuarto kilo"){
    articulo2.vender(1);
    alert("Compraste " + articulo2.nombre + " por $" + articulo2.precio);
}else if (articuloIngresado2 == "miel de medio kilo"){
    articulo3.vender(1);
    alert("Compraste " + articulo3.nombre + " por $" + articulo3.precio);
}else if (articuloIngresado2 == "miel de kilo"){
    articulo4.vender(1);
    alert("Compraste " + articulo4.nombre + " por $" + articulo4.precio);
}else{
    alert("El producto solicitado no se encuentra en stock");
}


let articuloIngresado3 = solicitarArticulo();

if (articuloIngresado3 == "caramelos de propoleo"){
    articulo1.vender(1);
    alert("Compraste " + articulo1.nombre + " por $" + articulo1.precio + " x 50 unidades");
}else if (articuloIngresado3 == "miel de cuarto kilo"){
    articulo2.vender(1);
    alert("Compraste " + articulo2.nombre + " por $" + articulo2.precio);
}else if (articuloIngresado3 == "miel de medio kilo"){
    articulo3.vender(1);
    alert("Compraste " + articulo3.nombre + " por $" + articulo3.precio);
}else if (articuloIngresado3 == "miel de kilo"){
    articulo4.vender(1);
    alert("Compraste " + articulo4.nombre + " por $" + articulo4.precio);
}else{
    alert("El producto solicitado no se encuentra en stock");
}

let articuloIngresado4 = solicitarArticulo();

if (articuloIngresado4 == "caramelos de propoleo"){
    articulo1.vender(1);
    alert("Compraste " + articulo1.nombre + " por $" + articulo1.precio + " x 50 unidades");
}else if (articuloIngresado4 == "miel de cuarto kilo"){
    articulo2.vender(1);
    alert("Compraste " + articulo2.nombre + " por $" + articulo2.precio);
}else if (articuloIngresado4 == "miel de medio kilo"){
    articulo3.vender(1);
    alert("Compraste " + articulo3.nombre + " por $" + articulo3.precio);
}else if (articuloIngresado4 == "miel de kilo"){
    articulo4.vender(1);
    alert("Compraste " + articulo4.nombre + " por $" + articulo4.precio);
}else{
    alert("El producto solicitado no se encuentra en stock");
}


console.log(articulo1.cantidad);
console.log(articulo2.cantidad);
console.log(articulo3.cantidad);
console.log(articulo4.cantidad);

articulo1.reponer(1);
articulo2.reponer(1);
articulo3.reponer(1);
articulo4.reponer(1);

let sumaProductos = suma(articulo1.precio, articulo2.precio, articulo3.precio, articulo4.precio, costoEnvio);

console.log(articulo1.cantidad);
console.log(articulo2.cantidad);
console.log(articulo3.cantidad);
console.log(articulo4.cantidad);

console.log(sumaProductos);


alert("Caramelos de propoleo $ " + articulo1.precio + "\n " +
      "Miel de cuarto kilo $ " + articulo2.precio + "\n " + 
      "Miel de medio kilo $ " + articulo3.precio + "\n " +
      "Miel de kilo $ " + articulo4.precio + "\n " +
      "costo de envío $ " + costoEnvio + "\n " + 
      "TOTAL $ " + sumaProductos);


