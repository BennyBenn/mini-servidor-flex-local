//para inicio, 5 videos,5 audios y 5 iumnanes
const $_cuerpo_tabla_video = document.querySelector("#_cuerpo_tabla_video");
const $_cuerpo_tabla_imagen = document.querySelector("#_cuerpo_tabla_imagen");
const $_cuerpo_tabla_audio = document.querySelector("#_cuerpo_tabla_audio");

function llenarImg(){
    var dir = 'img_';
    var files = [];
    for (var i = 10000; i <= 100196; i++) files.push(dir + i + '.JPG');     
    console.log(files);

    
   //for(jota = 0; jota < filas; jota++){
      
  //for(j = 0; j < files.length/6; j++){
      const $tr = document.createElement("tr");
      for(i=0; i < 12 ; i++){
        var randy = Math.floor(Math.random() * 30);
          let img = document.createElement("img");
          let $a = document.createElement('a');                
          $a.href = "imagenes/galeria/" + files[i+randy];// + ".JPG";                
          img.src = "imagenes/galeria/" + files[i+randy];//contador + ".JPG";                
          $a.target = "_blank";
          img.style.width = "120px";
          img.style.height = "120px";
          img.style.margin = "5px"; // Add this line for margin
          img.style.border = "none"
          $a.appendChild(img);
          let $tdCodigo=document.createElement("td");
          $tdCodigo.style.border = "none"; // Add this line to remove borders
          $tdCodigo.style.padding = "0px";
          $tdCodigo.appendChild($a);
          $tr.appendChild($tdCodigo);
          //contador++;
      }$_cuerpo_tabla_imagen.appendChild($tr); 
 // }

}

function llenarVid(){
    //var contador=1000;
    var randy = Math.floor(Math.random() * 30);
    const $tr = document.createElement("tr");
    for(i=1000 + randy; i < 1005+ randy ; i++){
      let $video = document.createElement("video");
      $video.id = "my-video";
      $video.classList.add("video-js");
      $video.controls = true;
      //$video.preload = "auto";
      $video.width = "300";
      $video.height = "220";        
      $video.data_setup = "{";
      $video.autoplay = false;
      $video.muted = "muted";
      $video.loop = true;
      $video.preload = "metadata";
      
      let $source = document.createElement("source");
      $source.src = "video/video_"+i+".webm";//contadr+".webm";
      $source.type = "video/webm";
      $video.appendChild($source);
        
      let $tdCodigo=document.createElement("td");        
      let $a = document.createElement("a");
      $a.setAttribute("href", "video/video_"+i+".webm");
      $a.setAttribute("target", "_blank");
      $a.appendChild($video);
      $tdCodigo.appendChild($a);
      $tr.appendChild($tdCodigo);
      //contador++;
    }$_cuerpo_tabla_video.appendChild($tr);  
}

function llenarAudio(){    
    contador=0;
    //for(j = 1; j < 4; j++){
    const $tr = document.createElement("tr");
        for(i=0; i < 5 ; i++){
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
    }$_cuerpo_tabla_audio.appendChild($tr);  
//}
}




window.onload = function() {    
    llenarImg();
    llenarVid();
    llenarAudio();
 };