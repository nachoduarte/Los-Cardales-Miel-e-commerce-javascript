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