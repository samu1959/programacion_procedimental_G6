
function ValidarDatos() {
    let nombre_producto = document.getElementById("nombre_producto").value;
    let Codigo_Producto = document.getElementById("Codigo_Producto").value;
    let precio_unitario = document.getElementById("precio_unitario").value;
    let cantidad_producto = document.getElementById("cantidad_producto").value;
    let unidad_medida = document.getElementById("unidad_medida").value;

    if (!categoria_producto || !codigo_producto || !nombre_producto || !cantidad_producto || !precio_unitario) {
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
            ${Codigo_Producto} \n
            ${nombre_producto} \n
            ${descripcion_producto} \n
            ${cantidad_producto} \n
            ${precio_unitario}`
        );

        if (!/^[a-zA-Z]+$/.test(categoria)) {
            console.log("Categoria debe contener letras")
            Swal.fire({
                title: "Categoria debe contener letras",
                icon: "error"
            });
            return;
        }

        if (!/^[a-zA-Z]+$/.test(precio_unitario)) {
            console.log("precio unitario debe contener letras")
            Swal.fire({
                title: "precio unitario debe contener letras",
                icon: "error"
            });
            return;
        }

        if (!/^\d+$/.test(Codigo_Producto)) {
            Swal.fire({
                title: "Codigo del producto debe contener números",
                icon: "error"
            });
            return;
        }

        if (!/^\d+$/.test(unidad_medida)) {
            Swal.fire({
                title: "unidad de medida debe contener números",
                icon: "error"
            });
            return;
        }

        if (!/^\d+$/.test(nombre_producto)) {
            Swal.fire({
                title: "nombre del producto debe contener números",
                icon: "error"
            });
            return;
        }

        if (!/^\d+$/.test(categoria_producto)) {
            Swal.fire({
                title: "categoria del producto debe contener números",
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