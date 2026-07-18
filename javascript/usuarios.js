function ValidarInformacion() {

    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let tipo_documento = document.getElementById("tipo_documento").value;
    let documento_identidad = document.getElementById("documento_identidad").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    let genero = generoSeleccionado ? generoSeleccionado.value : "";
    let cargo = document.getElementById("cargo").value;
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    let contrasena = document.getElementById("contrasena").value;

   
    const regexNombre = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexDocumento = /^\d{5,15}$/;
    const regexTelefono = /^\d{7,10}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexContrasena = /^.{6,}$/; // Mínimo 6 caracteres

    
    if (
        !nombres || !apellidos ||
        !tipo_documento || !documento_identidad ||
        !telefono || !email ||
        !genero || !cargo ||
        !fecha_nacimiento || !contrasena
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

    
    if (!regexNombre.test(nombres.trim())) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Nombre inválido",
            text: "Los nombres solo pueden contener letras.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    
    if (!regexNombre.test(apellidos.trim())) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Apellido inválido",
            text: "Los apellidos solo pueden contener letras.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

   
    if (!regexDocumento.test(documento_identidad.trim())) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Documento inválido",
            text: "Ingrese un número de documento válido.",
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

    if (!regexEmail.test(email.trim())) {
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

    
    console.log(`
        Información del Usuario:

        Nombres: ${nombres}
        Apellidos: ${apellidos}
        Tipo de documento: ${tipo_documento}
        Documento: ${documento_identidad}
        Teléfono: ${telefono}
        Email: ${email}
        Género: ${genero}
        Fecha de nacimiento: ${fecha_nacimiento}
        Contraseña: ${contrasena}
    `);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Información Guardada Correctamente",
        showConfirmButton: false,
        timer: 1500
    });
}

document.getElementById("btnGuardar").onclick = ValidarInformacion;


  Document.getElementById("subir").onclick=ValidarInformacion

     
   