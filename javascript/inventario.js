let n_producto = document.getElementById("n_producto").value;
let c_producto = document.getElementById("c_producto").value;
let p_unit = document.getElementById("p_unit").value;
let cantidad_producto = document.getElementById("cantidad_producto").value;
let unidad_medida = document.getElementById("unidad_medida").value;
let categoria_producto = document.getElementById("categoria_producto").value;



function ValidarDatos(){
    if(
        Codigo_Proucto != '' &&
        Nombre_producto != '' &&
        Precio_unitrio != '' &&
        Cntidad_Producto != '' &&
        Marca_Producto != '' &&
        Categoria_Poducto != '' &&
        Unidad_Medida != ''
    ){
        if(Codigo_Producto == /[a-zA-Z]/){
            console.log("Los datos ingresados son incorrectos");
        }

        if(Nombre_producto == /[0-9]/){
            console.log("Los datos ingresados son incorrectos");
        }

        if(Precio_unitario == /[a-zA-Z]/){
            console.log("Los datos ingresados son incorrectos");
        }

        if(Cantidad_Producto == /[a-zA-Z]/){
            console.log("Los datos ingresados son incorrectos");
        }

        if(Categoria_Producto == /[0-9]/){
            console.log("Los datos ingresados son incorrectos");
        }

        if(Unidad_Medida == /[0-9]/){
            console.log("Los datos ingresados son incorrectos");
        }

    }
    else{
        console.log("Ingrese todos los datos");
    }
}