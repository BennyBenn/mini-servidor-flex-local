const $_cuerpo_tabla = document.querySelector("#_cuerpo_tabla");
let contador = 1;

function entrada(){
    const total=500;
    const filas=50;
    
    

    for(jota = 0; jota < filas; jota++){
        const $tr = document.createElement("tr");
        for(i=0; i < 4 ; i++){
            let $img = document.createElement("img");
    //creamos un <tr>
    

    //td codigo
        let $tdCodigo=document.createElement("td");    
        $img.src = "imagenes/galeria/"+contador+".JPG";    
        $tdCodigo.appendChild($img);
        $tr.appendChild($tdCodigo);
        contador++;  

    //td nombre    
            let $tdNombre=document.createElement("td");
//            let $img = document.createElement("img");
            $img.src = "imagenes/galeria/"+contador+".jpg";            
            $tdNombre.appendChild($img);
            $tr.appendChild($tdNombre);
           contador++;            

    //td precio
                let $tdPrecio=document.createElement("td");
    //            let $img = document.createElement("img");
                $img.src = "imagenes/galeria/"+contador+".jpg";            
                $tdPrecio.appendChild($img);
                $tr.appendChild($tdPrecio);
               contador++; 

    //td descuento
                let $tdDescuento=document.createElement("td");
    //            let $img = document.createElement("img");
                $img.src = "imagenes/galeria/"+contador+".jpg";            
                $tdDescuento.appendChild($img);
                $tr.appendChild($tdDescuento);
                contador++;   
                
                let $tdFinal=document.createElement("td");
    //            let $img = document.createElement("img");
                $img.src = "imagenes/galeria/"+contador+".jpg";            
                $tdFinal.appendChild($img);
                $tr.appendChild($tdFinal);
                contador++;  

    //agregamos <tr> al cuerpo de la tabla
    //$_cuerpo_tabla.appendChild($tr);    

    }
    $_cuerpo_tabla.appendChild($tr); 
    }
}

window.onload = function() {
    // Your code here
    entrada();
 };