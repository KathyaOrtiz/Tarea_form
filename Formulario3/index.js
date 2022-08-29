




      function formularios(){
        //formulario 1
        
        //formulario 3
        nombre1=document.getElementById("nombre");
        apellido=document.getElementById("apellido");
        ingreso=document.getElementById("ingreso");
        salida=document.getElementById("salida");
        habitacion=document.getElementById("habitacion")
        nombre1.addEventListener("input", validacion3, false);
        apellido.addEventListener("input", validacion3, false);
        ingreso.addEventListener("input",validacion3,false);
        salida.addEventListener("input",validacion3,false);
        habitacion.addEventListener("select",validacion3,false);
        validacion3();
    }
    function validacion3(){
        if(nombre1.value==''){
            nombre1.setCustomValidity('Ingrese nombre');
            nombre1.style.background='#E0C0AE';

        }else{
            nombre1.setCustomValidity('');
            nombre1.style.background='#FFFFFF';

        }if(apellido.value==''){
            apellido.setCustomValidity('Ingrese apellido');
            apellido.style.background='#E0C0AE ';
        }else{
            apellido.setCustomValidity('');
            apellido.style.background='#FFFFFF';
        }if(ingreso.value==''){
            ingreso.setCustomValidity('Seleccione fecha ingreso');
            ingreso.style.background='#E0C0AE ';

        }else{
            ingreso.setCustomValidity('');
            ingreso.style.background='#FFFFFF';

        }if(salida.value==''){
            salida.setCustomValidity('Seleccione fecha salida');
            salida.style.background='#E0C0AE ';

        }else{
            salida.setCustomValidity('');
            salida.style.background='#FFFFFF';

        }if(habitacion.value==''){
            habitacion.setCustomValidity('Seleccione habitacion');


        }else{
            habitacion.setCustomValidity('');
            habitacion.style.background='#FFFFFF';

        }

    }
        window.addEventListener("load", formularios, false);