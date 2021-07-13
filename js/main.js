 

var caramelos = 100;
var mielCuarto = 115;
var mielMedio = 225;
var mielKilo = 450;

let costoEnvio = 150;

const solicitarArticulo = function(){
    return prompt("Ingrese el articulo deseado")
}

const suma = (a,b,c,d,e) => a + b + c + d + e;

let articulo1 = solicitarArticulo();

if (articulo1 == "caramelos de propoleo"){
    alert("caramelos de propoleo: $ " + caramelos + "x 50 unidades");
}else if (articulo1 == "miel de cuarto kilo"){
    alert("Miel de cuarto kilo: $" + mielCuarto);
}else if (articulo1 == "miel de medio kilo"){
    alert("Miel de medio kilo: $ " + mielMedio);
}else if (articulo1 == "miel de kilo"){
    alert("Miel de kilo: $ " + mielKilo);
}else{
    alert("El producto solicitado no se encuentra en stock");
}

let articulo2 = solicitarArticulo();

if (articulo2 == "caramelos de propoleo"){
    alert("caramelos de propoleo: $ " + caramelos + "x 50 unidades");
}else if (articulo2 == "miel de cuarto kilo"){
    alert("Miel de cuarto kilo: $" + mielCuarto);
}else if (articulo2 == "miel de medio kilo"){
    alert("Miel de medio kilo: $ " + mielMedio);
}else if (articulo2 == "miel de kilo"){
    alert("Miel de kilo: $ " + mielKilo);
}else{
    alert("El producto solicitado no se encuentra en stock");
}



let articulo3 = solicitarArticulo();

if (articulo3 == "caramelos de propoleo"){
    alert("caramelos de propoleo: $ " + caramelos + "x 50 unidades");
}else if (articulo3 == "miel de cuarto kilo"){
    alert("Miel de cuarto kilo: $" + mielCuarto);
}else if (articulo3 == "miel de medio kilo"){
    alert("Miel de medio kilo: $ " + mielMedio);
}else if (articulo3 == "miel de kilo"){
    alert("Miel de kilo: $ " + mielKilo);
}else{
    alert("El producto solicitado no se encuentra en stock");
}


let articulo4 = solicitarArticulo();


if (articulo4 == "caramelos de propoleo"){
    alert("caramelos de propoleo: $ " + caramelos + "x 50 unidades");
}else if (articulo4 == "miel de cuarto kilo"){
    alert("Miel de cuarto kilo: $" + mielCuarto);
}else if (articulo4 == "miel de medio kilo"){
    alert("Miel de medio kilo: $ " + mielMedio);
}else if (articulo4 == "miel de kilo"){
    alert("Miel de kilo: $ " + mielKilo);
}else{
    alert("El producto solicitado no se encuentra en stock");
}

let sumaProductos = suma(caramelos, mielCuarto, mielMedio, mielKilo, costoEnvio);

console.log(sumaProductos);


alert("Caramelos de propoleo $ " + caramelos + "\n " + "Miel de cuarto kilo $ " + mielCuarto + "\n " + "Miel de medio kilo $ " + mielMedio + "\n " + "Miel de kilo $ " + mielKilo + "\n " + "costo de envío $ " + costoEnvio + "\n " + "TOTAL $ " + sumaProductos);


