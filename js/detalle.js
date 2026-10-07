const parametros = new URLSearchParams(window.location.search);

const producto = parametros.get("producto");

const nombre = document.getElementById("nombreProducto");
const imagen = document.getElementById("imagenProducto");
const descripcion = document.getElementById("descripcionProducto");
const precio = document.getElementById("precioProducto");


if (producto === "americano") {

    nombre.textContent = "Café Americano";
    imagen.src = "imagenes/icons/cafee.jpg";
    descripcion.textContent = "Café americano preparado con café recién molido y agua caliente.";
    precio.textContent = "Precio: $45";

}

else if (producto === "clasico") {

    nombre.textContent = "Café Clásico";
    imagen.src = "imagenes/cafe2.jpg";
    descripcion.textContent = "Nuestro café clásico, preparado con ingredientes de la mejor calidad.";
    precio.textContent = "Precio: $50";

}

else if (producto === "cafe3") {

    nombre.textContent = "Café Especial";
    imagen.src = "imagenes/cafe3.jpg";
    descripcion.textContent = "Una opción especial para disfrutar de un buen café.";
    precio.textContent = "Precio: $55";

}

else if (producto === "cafe4") {

    nombre.textContent = "Café 4";
    imagen.src = "imagenes/cafe4.jpg";
    descripcion.textContent = "Una deliciosa opción disponible en nuestra cafetería.";
    precio.textContent = "Precio: $60";

}

else if (producto === "cafe5") {

    nombre.textContent = "Café 5";
    imagen.src = "imagenes/cafe5.jpg";
    descripcion.textContent = "Una bebida preparada especialmente para nuestros clientes.";
    precio.textContent = "Precio: $55";

}

else if (producto === "cafe6") {

    nombre.textContent = "Café 6";
    imagen.src = "imagenes/cafe6.jpg";
    descripcion.textContent = "Descubre esta deliciosa opción de nuestro catálogo.";
    precio.textContent = "Precio: $65";

}