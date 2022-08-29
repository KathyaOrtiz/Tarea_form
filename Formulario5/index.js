




      function formularios(){
        //formulario 1
        
        //formulario 3
        auto=document.getElementById("auto")
        plazos=document.getElementById("plazos")
        enganche=document.getElementById("enganche")
        
      
        auto.addEventListener("change",validacion3,false);
        plazos.addEventListener("change",validacion3,false);
        enganche.addEventListener("change",validacion3,false);
        validacion3();
    }
    function validacion3(){
     if(auto.value==''){
            auto.setCustomValidity('Seleccione auto');


        }else{
            auto.setCustomValidity('');
              

        }
        if(plazos.value==''){
            plazos.setCustomValidity('Seleccione plazo');


        }else{
            plazos.setCustomValidity('');
              

        }
        if(enganche.value==''){
            enganche.setCustomValidity('Seleccione enganche');


        }else{
            enganche.setCustomValidity('');
              

        }

    }
        window.addEventListener("load", formularios, false);