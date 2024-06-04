let nombr=document.getElementById('nombre').value;
let contra=document.getElementById('password').value;

const usuarios=["1234"];
const contras=["1234"];

function entrada() {
    validadorDD();
}


function validadorDD(){
  if(usuarios.includes(nombr) && contras.includes(contra))
    if(usuarios.indexOf(nombr) === contras.indexOf(contra))
        window.location.href = "inicio.html";

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