//expresiones regulares
//correo

function formularios(){
    //formulario 1
    
    //formulario 3
    nombre1=document.getElementById("nombre");
    nombre2=document.getElementById("apellido");
    correo=document.getElementById("correo");
    telefono=document.getElementById("telefono");
    direccion=document.getElementById("direccion");
  
  
    nombre1.addEventListener("input", validacion3, false);
    nombre2.addEventListener("input", validacion3, false);
    correo.addEventListener("input",validacion3,false);
    telefono.addEventListener("input",validacion3,false);
    direccion.addEventListener("input",validacion3,false);
   
  
    validacion3();
}
//pequeña expresion regular para validar el correo
re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
var telef = /^[0-9]{8}$/;




function validacion3(){
    if(nombre1.value==''){
        nombre1.setCustomValidity('Ingrese nombre');
        nombre1.style.background='#ffe7cb';

    }else{
        nombre1.setCustomValidity('');
        nombre1.style.background='#FFFFFF';

    }if(nombre2.value==''){
        nombre2.setCustomValidity('Ingrese apellido');
        nombre2.style.background='#ffe7cb';
    }else{
        nombre2.setCustomValidity('');
        nombre2.style.background='#FFFFFF';
        //validando correo electronico
    }if(!re.exec(correo.value)){
        correo.setCustomValidity('Agregue su correo');
        correo.style.background='#ffe7cb ';

    }else{
        correo.setCustomValidity('');
        correo.style.background='#FFFFFF';
        //validando que se ingrese contraseña

//validando numero de telefono con solo 8 digitos
    }if(!telef.exec(telefono.value)){
        telefono.setCustomValidity('Campo vacio');
        telefono.style.background='#ffe7cb';

    }else{
        telefono.setCustomValidity('');
        telefono.style.background='#FFFFFF';

    }
    if(direccion.value==''){
        direccion.setCustomValidity('Ingrese direccion');
        direccion.style.background='#ffe7cb';
    }else{
        direccion.setCustomValidity('');
        direccion.style.background='#FFFFFF';
       
    }

}
    window.addEventListener("load", formularios, false);