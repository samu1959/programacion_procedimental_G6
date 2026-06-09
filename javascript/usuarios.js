let nombre = document.getElementById("nombre").value;
let direccion = document.getElementById("direccion").value;
let n_celular = document.getElementById("n_celular").value;
let contraseña = document.getElementById("contraseña").value;
let usuario = document.getElementById("usuario").value;
let email = document.getElementById("email").value;
let genero = document.getElementById("genero").value;
let terminosycondiciones = document.querySelector('input[name="question"]:checked').value



function ValidarDatos() {

     let fecha = new date (document.getElementById("fecha").value)


    if (
        contraseña != '' &&
      telefono_usuarios!= '' &&
        email_usuarios != '' &&
        genero != '' &&
        fecha_nacimiento != '' &&
        nombre  != ''
    )

    {
        if (contraseña.let >= 8 ) {
            console.log("Los datos ingresados son incorrectos")
        }

        if (telefono_usuarios == /[a-zA-Z]/) {
            console.log("Los datos ingresados son incorrectos")
        }

        if (!email_pedidos.include('@')) {
            console.log("Los datos ingresados no son correctos")
        }

        if (genero == /[0-9]/) {
            console.log("Los datos ingresados son incorrectos")
        }

        if (fecha >= getdate ()) {
            console.log("Los datos ingresados son incorrectos")
        }

        if (nombre == /[0-9]/) {
            console.log("Los datos ingresados son incorrectos")
        }

    }


    else {
        console.log("Ingrese todos los datos")
    }
}