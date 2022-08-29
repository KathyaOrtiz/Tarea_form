//expresiones regulares
//correo

function formularios(){
    //formulario 1
    
    //formulario 3
    nombre1=document.getElementById("nombre");
    nombre2=document.getElementById("apellido");
    correo=document.getElementById("correo");
    contraseña=document.getElementById("contraseña");
  
  
    nombre1.addEventListener("input", validacion3, false);
    nombre2.addEventListener("input", validacion3, false);
    correo.addEventListener("input",validacion3,false);
    contraseña.addEventListener("input",validacion3,false);
  
    validacion3();
}
//pequeña expresion regular para validar el correo
re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
var regex = /^(\d\s?){15,16}$/;
var patroncv = /^[0-9]{3}$/;


function validacion3(){
    if(nombre1.value==''){
        nombre1.setCustomValidity('Ingrese nombre');
        nombre1.style.background='#b4f7ee';

    }else{
        nombre1.setCustomValidity('');
        nombre1.style.background='#FFFFFF';

    }if(nombre2.value==''){
        nombre2.setCustomValidity('Ingrese apellido');
        nombre2.style.background='#b4f7ee';
    }else{
        nombre2.setCustomValidity('');
        nombre2.style.background='#FFFFFF';
        //validando correo electronico
    }if(!re.exec(correo.value)){
        correo.setCustomValidity('Agregue su correo');
        correo.style.background='#b4f7ee ';

    }else{
        correo.setCustomValidity('');
        correo.style.background='#FFFFFF';
        //validando que se ingrese contraseña

    }if(contraseña.value==''){
        contraseña.setCustomValidity('Campo vacio');
        contraseña.style.background='#b4f7ee';

    }else{
        contraseña.setCustomValidity('');
        contraseña.style.background='#FFFFFF';

    }

}
    window.addEventListener("load", formularios, false);