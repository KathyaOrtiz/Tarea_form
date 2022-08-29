

//expresiones regulares
//correo

function formularios(){
    //formulario 1
    
    //formulario 3
    nombre1=document.getElementById("nombre");
    nombre2=document.getElementById("apellido");
    correo=document.getElementById("correo");
    contraseña=document.getElementById("contraseña");
    numerotarjeta=document.getElementById("numerotarjeta");
    cv=document.getElementById("cv");
    fecha=document.getElementById("fecha");
   
 
  
    nombre1.addEventListener("input", validacion3, false);
    nombre2.addEventListener("input", validacion3, false);
    correo.addEventListener("input",validacion3,false);
    contraseña.addEventListener("input",validacion3,false);
    numerotarjeta.addEventListener("input",validacion3,false);
    cv.addEventListener("input",validacion3,false)
   
    validacion3();
}

var regex = /^(\d\s?){15,16}$/;
var patroncv = /^[0-9]{3}$/;

hoy =new Date();



function validacion3(){
    //validacion numero tarjeta de credito 
   if(!regex.exec(numerotarjeta.value)){
        numerotarjeta.setCustomValidity('Agregue numero de tarjeta');
        numerotarjeta.style.background='#f392a9 ';
    }else{
        numerotarjeta.setCustomValidity('');
        numerotarjeta.style.background='#FFFFFF';
    
    }//validacion para cvv
    if(!patroncv.exec(cv.value)){
        cv.setCustomValidity('Agregue el cvc de su tarjeta');
        cv.style.background='#f392a9 ';

    }else{
        cv.setCustomValidity('');
        cv.style.background='#FFFFFF';
    }
  


}
    window.addEventListener("load", formularios, false);