let nom_pedidos = document.getElementById("nom_pedidos").value;
let direc_pedidos = document.getElementById("direc_pedidos").value;
let telefono = document.getElementById("n_celular").value;
let email_pedidos = document.getElementById("email_pedidos").value;
let metodo_pago = document.getElementById("metodo_pago").value;
let pedido = document.getElementById("pedido").value;
let referencias = document.getElementById("referencias").value;


function ValidarDatos() {
    if (
        direccion_pedidos != '' &&
        tlefono_pedidos != '' &&
        email_pedidos != '' &&
        metdo_pago != '' &&
        pedido != '' &&
        nom_peidos != ''
    )

    {
        if (direccion_pedidos == /[0-9]/) {
            console.log("Los datos ingresados son incorrectos")
        }

        if (telefono_pedidos == /[a-zA-Z]/) {
            console.log("Los datos ingresados son incorrectos")
        }

        if (!email_pedidos.include('@')) {
            console.log("Los datos ingresados no son correctos")
        }

        if (metodo_pago == /[0-9]/) {
            console.log("Los datos ingresados son incorrectos")
        }

        if (pedido == /[0-9]/) {
            console.log("Los datos ingresados son incorrectos")
        }

        if (nom_pedidos == /[0-9]/) {
            console.log("Los datos ingresados son incorrectos")
        }

    }


    else {
        console.log("Ingrese todos los datos")
    }
}