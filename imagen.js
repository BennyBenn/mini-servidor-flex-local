const $_cuerpo_tabla = document.querySelector("#_cuerpo_tabla");
let contador = 1;

function entrada(){
    

    //version 1, resultado: jala pero no como quiero
    const total=250;
    const filas=35;

    //const img = document.createElement("img");

    /*
    //funciona pero siempre y cuando los elementos vayan de 1 en 1 y solo con numeros
    for(jota = 0; jota < filas; jota++){
        const $tr = document.createElement("tr");
        for(i=0; i < 4 ; i++){
            let img = document.createElement("img");

            let $a = document.createElement('a');
            $a.href = "imagenes/galeria/" + contador + ".JPG";
            $a.target = "_blank";
            img.src = "imagenes/galeria/" + contador + ".JPG";
            img.style.width = "50px";
            img.style.height = "50px";
            $a.appendChild(img);
            let $tdCodigo=document.createElement("td");
            $tdCodigo.appendChild($a);
            $tr.appendChild($tdCodigo);
            contador++;

            //let $img = document.createElement("img");
    
            /*
            let $tdCodigo=document.createElement("td");    
            $img.src = "imagenes/galeria/"+contador+".JPG";    
            $tdCodigo.appendChild($img);
            $tr.appendChild($tdCodigo);
            contador++;      */

            //let $img = document.createElement("img");
            /*
            let $a = document.createElement('a');
            $a.href = "imagenes/galeria/" + contador + ".JPG";
            $a.target = "_blank";
            img.src = "imagenes/galeria/" + contador + ".JPG";
            $img.style.width = "150px";
            $img.style.height = "150px";
            $a.appendChild($img);
            let $tdCodigo=document.createElement("td");
            $tdCodigo.appendChild($a);
            $tr.appendChild($tdCodigo);
            contador++;
            */


            /*
            let $tdNombre=document.createElement("td");
            $img.src = "imagenes/galeria/"+contador+".jpg";            
            $tdNombre.appendChild($img);
            $tr.appendChild($tdNombre);
            contador++;            
            
            let $img = document.createElement("img");
            let $a = document.createElement('a');
            $a.href = "imagenes/galeria/" + contador + ".JPG";
            $a.target = "_blank";
            $img.style.width = "50px";
            $img.style.height = "50px";
            $a.appendChild($img);
            let $tdCodigo=document.createElement("td");
            $tdCodigo.appendChild($a);
            $tr.appendChild($tdCodigo);
            contador++;

            /*
            let $tdPrecio=document.createElement("td");    
            $img.src = "imagenes/galeria/"+contador+".jpg";            
            $tdPrecio.appendChild($img);
            $tr.appendChild($tdPrecio);
            contador++; 
            */

            /*
            let $tdDescuento=document.createElement("td");    
            $img.src = "imagenes/galeria/"+contador+".jpg";            
            $tdDescuento.appendChild($img);
            $tr.appendChild($tdDescuento);
            contador++;   
            */
            
            /*
            let $tdFinal=document.createElement("td");
            $img.src = "imagenes/galeria/"+contador+".jpg";            
            $tdFinal.appendChild($img);
            $tr.appendChild($tdFinal);
            contador++;  
            */
   // }$_cuerpo_tabla.appendChild($tr); 
 //   }



     //inicio de version 2, ahora con mas poder
     //var dir = 'imagenes/galeria/';
     var dir = 'img_';
     var files = [];
     for (var i = 10000; i <= 100196; i++) files.push(dir + i + '.JPG');     
     console.log(files);


     //for(jota = 0; jota < filas; jota++){
        
    for(j = 0; j < files.length/6; j++){
        const $tr = document.createElement("tr");
        for(i=0; i < 6 ; i++){
            let img = document.createElement("img");
            let $a = document.createElement('a');                
            $a.href = "imagenes/galeria/" + files[contador];// + ".JPG";                
            img.src = "imagenes/galeria/" + files[contador];//contador + ".JPG";                
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
            contador++;
        }
        $_cuerpo_tabla.appendChild($tr); 
    }
     

    /*
    //version 3
    var dir = '';
    var files = [];

    for (var i = 1; i <= 1000; i++) files.push(dir + i + '.JPG');

    for (var j = 0; j < files.length; j++) {
    const $tr = document.createElement("tr");
    for (var i = 0; i < 4; i++) {
    let img = document.createElement("img");
    let $a = document.createElement('a');
    //if (typeof files[j].type === 'string' && files[j].type.in(/image\/.*$/i)) {
      $a.href = "imagenes/galeria/" + files[j];// + ".JPG";
      img.src = "imagenes/galeria/" + files[j];//contador + ".JPG";
   // } else {
   //   console.log("le valuo caca");
   //   continue;
   // }
    $a.target = "_blank";
    img.style.width = "50px";
    img.style.height = "50px";
    $a.appendChild(img);
    let $tdCodigo=document.createElement("td");
    $tdCodigo.appendChild($a);
    $tr.appendChild($tdCodigo);
  }$_cuerpo_tabla.appendChild($tr); 

}
*/
}
//*/

window.onload = function() {
    // Your code here
    entrada();
 };
 function cerrar(){
	window.open('','_parent',''); 
    window.close();	
}