function ValidarDatos() {
    let nombre_producto = document.getElementById("nombre_producto").value;
    let codigo_producto = document.getElementById("codigo_producto").value;
    let precio_unitario = document.getElementById("precio_unitario").value;
    let cantidad_producto = document.getElementById("cantidad_producto").value; 
    let descripcion_producto = document.getElementById("descripcion_producto").value;

    if (!codigo_producto || !nombre_producto || !cantidad_producto || !precio_unitario) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1500
        });
    }


    else {
        console.log(
            `Informacion del Producto: \n
            ${codigo_producto} \n
            ${nombre_producto} \n
            ${descripcion_producto} \n
            ${cantidad_producto} \n
            ${precio_unitario}`
        );

        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(nombre_producto)) {
            Swal.fire({
                title: "nombre del producto debe contener solo letras",
                icon: "error"
            });
            return;
        }

          if (!/^\d+$/.test(codigo_producto)) {
            Swal.fire({
                title: "Codigo del producto debe contener solo números",
                icon: "error"
            });
            return;
        }


        if (!/^\d+$/.test(precio_unitario)) {
            console.log("precio unitario debe contener solo números")
            Swal.fire({
                title: "precio unitario debe contener solo números",
                icon: "error"
            });
            return;
        }

          if (!/^\d+$/.test(cantidad_producto)) {
            console.log("precio unitario debe contener solo números")
            Swal.fire({
                title: "cantidad del producto debe contener solo números",
                icon: "error"
            });
            return;
        }

      




        if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ0-9\s()]+$/.test(descripcion_producto)) {
            Swal.fire({
                title: "descripcion del producto tiene caracteres no permitidos",
                icon: "error"
            });
            return;
        }


        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Informacion Guardada Correctamente en la base de datos ",
            showConfirmButton: false,
            timer: 1500
        });
    }
}


document.getElementById("Subir").onclick = ValidarDatos;