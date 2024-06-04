let nombre = document.getElementById('nombree');
let contraseña = document.getElementById('contraseñaa');

nomb="Alvin";
contra="caca";
intentos=1;

function entrada(){
	if(intentos < 4 ){
		if(nombre.value === nomb){		
			if(contraseña.value === contra){
				alert("entrada exitosa");
			 	window.location.replace("inicio.html");
			}
		}else {alert("inicio fallifo"); intentos++;}
	}else window.location.replace("inicio_fallido.html");
	
	nombre.value="";
	contraseña.value="";
	nombre.focus();
}

function cerrar(){
	window.open('','_parent',''); 
    window.close();	
}

function regresarHome(){
	window.location.replace("index.html");	
}

/*
let usuarios = ["1234"];
let contras = ["1234"];

function entrada(){
  //validadorDD();
  window.location.replace = "inicio.html";
}

function validadorDD() {
  if (usuarios.includes(nombre) && contras.includes(contraseña)) {
    if (usuarios.indexOf(nombre) === contras.indexOf(contraseña)) {
      // Redirect to inicio.html
      window.location.href = "inicio.html";
    }
  }
}

document.querySelector('form').addEventListener('submit', entrada);


/*
let nombre=document.getElementById('nombree').value;
let contra=document.getElementById('contraseñaa').value;

const usuarios=["1234"];
const contras=["1234"];

function entrada() {
    validadorDD();
}


function validadorDD(){
  if(usuarios.includes(nombre) && contras.includes(contra)){
    if(usuarios.indexOf(nombre) === contras.indexOf(contra)){
        window.location.href = "inicio.html";
    }
    }
}


/*
function entrada(){    
    let usrIndex = recUsr();
    let pwdIndex = recPwd();

    if (usrIndex > -1 && pwdIndex > -1 && usrIndex === pwdIndex)
        window.location.replace("inicio.html");

    ////
    let nombr = document.getElementById('nombre').value;
    let contra = document.getElementById('password').value;
  
    if (recUsr(nombr) > -1 && recPwd(contra) > -1) {
      window.location.href("inicio.html");
      console.log("entra");
    }
    console.log("no entra ");
        
}*/



/*
function recUsr(usr) {
    usuarios.forEach((user, index) => {
      if (user === usr) {
        return index;
      }
    });
    return -1;
  }
  
  function recPwd(pass) {
    contras.forEach((pwd, index) => {
      if (pwd === pass) {
        return index;
      }
    });
    return -1;
  }
  */