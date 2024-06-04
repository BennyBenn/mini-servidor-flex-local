const usuarios=["Obama@usa.gov"];
const contras=["BinLaden"];

function entrada(usr,pass){

    if(usuarios.contains(usr) && contras.contains(pass) ){
        window.location.replace("inicio.html");

    }
}