function ValidarInformacion() {


    let nombre = document.getElementById("nombre").value;
    let usuario = document.getElementById("usuario").value;
    let email = document.getElementById("email").value;
    let contrasena = document.getElementById("contraseña").value;
    let celular = document.getElementById("n_celular").value;
    let direccion = document.getElementById("direccion").value;
    let genero = document.getElementById("genero").value;
    let terminos = document.getElementById("terminosycondiciones").checked;


    const regexNombre = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexUsuario = /^[a-zA-Z0-9_.]{3,20}$/;
    const regexTelefono = /^\d{7,10}$/;
    const regexEmail = /^[^\s@]+$/; 
    const regexContrasena = /^.{6,}$/;
    

    if (
        !nombre || !usuario || !email ||
        !contrasena || !celular || !direccion ||
        !genero  
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


    if (!regexNombre.test(nombre.trim())) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Nombre inválido",
            text: "El nombre solo puede contener letras.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }


    if (!regexUsuario.test(usuario.trim())) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Usuario inválido",
            text: "El usuario debe tener entre 3 y 20 caracteres (letras, números, '_' o '.').",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

        if (!regexEmail.test(email.trim())) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Correo inválido",
            text: "Ingrese la parte del correo antes de @gmail.com.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

       if (!regexContrasena.test(contrasena)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Contraseña inválida",
            text: "La contraseña debe tener al menos 6 caracteres.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }



    if (!regexTelefono.test(celular.trim())) {
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



 

    if (!terminos) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Términos y condiciones",
            text: "Debes aceptar los términos y condiciones.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }


    console.log(`
        Información del Usuario:

        Nombre: ${nombre}
        Usuario: ${usuario}
        Email: ${email}@gmail.com
        Teléfono: ${celular}
        Dirección: ${direccion}
        Género: ${genero}
    `);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Información Guardada Correctamente",
        showConfirmButton: false,
        timer: 1500
    });
}

document.getElementById("Subir").onclick = ValidarInformacion;