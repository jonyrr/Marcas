function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.f_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000)
}


function carrousel() {
    // Variables
    const IMAGENES = [
        'imagenes/imagen1.jpg',
        'imagenes/DonQuijote.png',
        'imagenes/Hamlet.png',
        'imagenes/CienAños.png',
        'imagenes/1984.png',
        'imagenes/ElPrincipito.png'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
        redimensionarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
        redimensionarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Funcion que redimensiona la imagen
     */
    function redimensionarImagen() {
        $imagen.style.backgroundSize = 'contain';
        $imagen.style.backgroundRepeat = 'no-repeat';
        $imagen.style.backgroundPosition = 'center';
    }
    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen(); 
    redimensionarImagen();
} 

function limpiar() {   
    document.getElementById("contenido").innerHTML = "";   
   }  


function generaForm(){
  
    
        
    ////Crear el objeto formulario
    let formulario=document.createElement("form");

    ////Crear el objeto label de titulo
    let titulo=document.createElement("label");

    ////Crear el objeto caja de texto Nombres
    let cajaTextNombres=document.createElement("input");

    ////Crear el objeto caja de texto Apellidos
    let cajaTextApellidos=document.createElement("input");

    ////Crear el objeto caja de texto Email
    let cajaTextEmail=document.createElement("input");

    ////Crear el objeto caja de texto Asunto del Mensaje
    let cajaTextAsunto=document.createElement("input");

    ////Crear el objeto area de texto del Mensaje
    let cajaTextMensaje=document.createElement("textarea");

    ////Crear el objeto boton
    let boton=document.createElement("input");

    ////Asignar atributos al objeto formulario
        formulario.setAttribute('method', "post");//Asignar el atributo method
        formulario.setAttribute('action', "");//Asignar el atributo action
        formulario.setAttribute('style', "width:300px;margin: 0px auto");//Asignar el atributo style

        ////Asignar atributos al objeto caja de texto de Nombres
        cajaTextNombres.setAttribute('type', "text");//Asignar el atributo type
        cajaTextNombres.setAttribute('placeholder', "Nombres");//Asignar el atributo placeholder
        cajaTextNombres.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto caja de texto de Apellidos
        cajaTextApellidos.setAttribute('type', "text");//Asignar el atributo type
        cajaTextApellidos.setAttribute('placeholder', "Apellidos");//Asignar el atributo placeholder
        cajaTextApellidos.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto caja de texto de Email
        cajaTextEmail.setAttribute('type', "email");//Asignar el atributo type
        cajaTextEmail.setAttribute('placeholder', "Email");//Asignar el atributo placeholder
        cajaTextEmail.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto caja de texto de Asunto
        cajaTextAsunto.setAttribute('type', "text");//Asignar el atributo type
        cajaTextAsunto.setAttribute('placeholder', "Asunto");//Asignar el atributo placeholder
        cajaTextAsunto.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style

        ////Asignar atributos al objeto area de texto de Mensaje
        cajaTextMensaje.setAttribute('placeholder', "Mensaje");//Asignar el atributo placeholder
        cajaTextMensaje.setAttribute('style', "width:100%;height:200px;margin: 10px 0px;padding: 5px");//Asignar el atributo style

    ////Asignar atributos al objeto boton
    boton.setAttribute('type', "button");//Asignar el atributo type	
        boton.setAttribute('value', "Enviar");//Asignar el atributo value
        boton.setAttribute('style', "width:100px;margin: 10px 0px;padding: 10px;background:#F05133;color:#fff;border:solid 1px #000;");//Asignar el atributo style
        boton.setAttribute('onclick', "alert('Se envio el mensaje')");//Asignar el metodo onclick

        titulo.innerHTML='<h1>Contacto</h1>';//Asignar el texto de titulo en el objeto titulo
        formulario.appendChild(titulo);//Agregar el objeto titulo al objeto formulario
        formulario.appendChild(cajaTextNombres);//Agregar el objeto caja de texto Nombres al objeto formulario
        formulario.appendChild(cajaTextApellidos);//Agregar el objeto caja de texto Apellidos al objeto formulario
        formulario.appendChild(cajaTextEmail);//Agregar el objeto caja de texto Email al objeto formulario
        formulario.appendChild(cajaTextAsunto);//Agregar el objeto caja de texto Asunto al objeto formulario
        formulario.appendChild(cajaTextMensaje);//Agregar el objeto area de texto del Mensaje al objeto formulario
        formulario.appendChild(boton);//Agregar el objeto boton al objeto formulario
        document.getElementById('contenido').appendChild(formulario);//Agregar el formulario a la etiquete con el ID
	
}