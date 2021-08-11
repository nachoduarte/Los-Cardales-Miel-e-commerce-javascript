//DECLARACION DE OBJETOS
class Articulo {
    constructor(id, nombre, precio, imagen, cantidad) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.imagen = imagen;
        this.cantidad = cantidad || 1;
        }
        agregarCantidad(valor){
            this.cantidad += valor;
        }

        subtotal(){
            return this.cantidad * this.precio;
        }
        reponer(cantidad){
            this.cantidad += cantidad;
        }
}
