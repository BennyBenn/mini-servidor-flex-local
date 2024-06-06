const $_cuerpo_tabla = document.querySelector("#_cuerpo_tabla");

function agregarAudios(){
    contador=0;
    for(j = 1; j < 4; j++){
    const $tr = document.createElement("tr");
        for(i=0; i < 4 ; i++){
        let $audio = document.createElement("audio");
        $audio.id = "my-audio";
        $audio.classList.add("audio-js");
        $audio.controls = true;
        $audio.preload = "auto";
        
        let $source = document.createElement("source");
        $source.src = "audios/audio_"+contador+".mp3";//contadr+".webm";
        $source.type = "audio/mpeg";
        
        $audio.appendChild($source);

        let $tdCodigo=document.createElement("td");        
        let $a = document.createElement("a");
        $a.setAttribute("href", "audio/audio_"+contador+".mp3");
        $a.setAttribute("target", "_blank");
        $a.appendChild($audio);
        $tdCodigo.appendChild($a);
        $tr.appendChild($tdCodigo);
        contador++;
    }$_cuerpo_tabla.appendChild($tr);  
}
}

window.onload = function() {    
    agregarAudios();
 };

  function cerrar(){
    window.open('','_parent',''); 
    window.close();	
  }

