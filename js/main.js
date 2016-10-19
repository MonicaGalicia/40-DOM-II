function validateForm(){
    var spans=document.createElement("span");
    var span_arreglo=document.getElementsByClassName("error")
    while(span_arreglo.length>0){
    	span_arreglo[0].parentElement.removeChild(span_arreglo[0]);
    }

	var nombre=document.getElementById("name").value;
	var apellido=document.getElementById("lastname").value;
	var email=document.getElementById("inputEmail").value;
	var password=document.getElementById("inputPassword").value;
	var selecciona=document.getElementById("opciones").value;

	if(nombre==="" || nombre===null || !/^[A-Z][a-z]*$/g.test(document.getElementById('name').value)){
		var span=document.createElement("span");
		span.setAttribute("class" ,"error");
		span.innerHTML="El nombre debe iniciar con mayuscula";
		var mensaje2= document.getElementsByClassName("input-box")[0].appendChild(span);
		
	}if(apellido==="" || apellido===null || !/^[A-Z][a-z]*$/g.test(document.getElementById('name').value)){
		var span=document.createElement("span");
		span.setAttribute("class" ,"error");
		span.innerHTML="Campos obligatorios";
		var mensaje2= document.getElementsByClassName("input-box")[1].appendChild(span);
		
	}if( email ==="" || email===null || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(document.getElementById('name').value)){
		var span=document.createElement("span");
		span.setAttribute("class" ,"error");
		span.innerHTML="Campos obligatorios";
		var mensaje2= document.getElementsByClassName("input-box")[2].appendChild(span);

	}if(selecciona===""){
		var span=document.createElement("span");
		span.setAttribute("class" ,"error");
		span.innerHTML="Selecciona al menos una opción";
		var mensaje2= document.getElementsByClassName("form-group")[1].appendChild(span);
	}if(password==="123456" || password==="098754"|| password==="password" || password.length < 6){
		var span=document.createElement("span");
		span.setAttribute("class" ,"error");
		span.innerHTML="Contraseña no permitida";
		var mensaje2= document.getElementsByClassName("form-group")[0].appendChild(span);
	}

}


