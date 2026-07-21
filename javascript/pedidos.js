function ValidarDatos() {


    let nombre_pedidos = document.getElementById("nom_pedidos").value;
    let direccion = document.getElementById("direc_pedidos").value;
    let telefono = document.getElementById("telefono").value;
    let email_pedidos = document.getElementById("email_pedidos").value;
    let metodo_pago = document.getElementById("metodo_pago").value;
    let pedido = document.getElementById("pedido").value;
    let referencias = document.getElementById("referencias").value;


    const regexNombre = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/;
    const regexTelefono = /^\+?\d{1,3}[\s-]?\d{6,10}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexNoVacio = /\S+/;
    const regexPedido = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ0-9\s,]+$/;


    if (
        !nombre_pedidos || !direccion || !telefono ||
        !email_pedidos || !metodo_pago ||
        !pedido || !referencias
    ) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos Incompletos",
            text: "Todos los campos son obligatorios.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }


    if  (!regexNombre.test(nombre_pedidos.trim())) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Nombre inválido",
            text: "El nombre solo puede contener letras y espacios.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }


    if (!regexNoVacio.test(direccion.trim())) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Dirección inválida",
            text: "Ingrese una dirección válida.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }


    if (!regexTelefono.test(telefono.trim())) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Teléfono inválido",
            text: "Ingrese un número de teléfono válido.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }


    if (!regexEmail.test(email_pedidos.trim())) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Correo inválido",
            text: "Ingrese un correo electrónico válido.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }


    if (!regexNombre.test(metodo_pago.trim())) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Método de pago inválido",
            text: "El método de pago solo debe contener letras.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }


    if (!regexPedido.test(pedido.trim())) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Pedido inválido",
            text: "El pedido contiene caracteres no permitidos.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }


    console.log(`
        Información del pedido:

        Nombre del pedido: ${nombre_pedidos}
        Dirección: ${direccion}
        Email: ${email_pedidos}
        Pedido: ${pedido}
        Método de pago: ${metodo_pago}
        Referencias: ${referencias}
        Teléfono: ${telefono}
    `);

     Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Información Guardada Correctamente",
        showConfirmButton: false,
        timer: 1500
    });
}


document.getElementById("Subir").onclick = ValidarDatos;