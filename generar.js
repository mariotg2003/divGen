let generador=document.getElementById("generador")
let puntuacion=document.getElementById("puntuacion")
let empezar=document.getElementById("botonEmpezar")
let bolas=0
let randomBola
let puntos = 0

function generar(){

    bolaColor("red")
    bolaColor("red")
    bolaColor("red")
    bolaColor("red")
    bolaColor("red")
    bolaColor("red")
    bolaColor("red")
    bolaColor("red")
    bolaColor("red")
    bolaColor("red")
    bolaColor("red")
    bolaColorMala("red")
};

function bolaColor(nombreColor) {
    let boton = document.createElement("div");
    boton.style.width = "50px";
    boton.className = "botones";
    boton.style.height = "50px";
    boton.style.borderRadius = "50px";
    boton.style.backgroundColor = nombreColor;
    boton.style.position = "absolute";
    boton.style.border = "3px solid black";
    boton.style.cursor = "pointer";
    boton.style.left = Math.random() * (generador.offsetWidth - 50) + "px";
    boton.style.top = Math.random() * (generador.offsetHeight - 50) + "px";
    generador.appendChild(boton);
    bolas++;
    
    boton.addEventListener("click", function() {
      boton.remove();
      puntos++
      puntuacion.innerHTML=puntos
      recorrerDivs("generador")
    });
  }

  function bolaColorMala(nombreColor) {
    let boton = document.createElement("div");
    boton.style.width = "50px";
    boton.className = "botonMalo";
    boton.style.height = "50px";
    boton.style.borderRadius = "50px";
    boton.style.backgroundColor = nombreColor;
    boton.style.position = "absolute";
    boton.style.border = "3px solid black";
    boton.style.cursor = "pointer";
    boton.style.left = Math.random() * (generador.offsetWidth - 50) + "px";
    boton.style.top = Math.random() * (generador.offsetHeight - 50) + "px";
    generador.appendChild(boton);
    bolas++;
    
    boton.addEventListener("click", function() {
      boton.remove();
      generar();
    });
  }



function recorrerDivs(contenedor) {
  var divs = document.getElementById(contenedor).getElementsByTagName("div");
  
  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    var clase = div.className;
    
    if(divs.length==1 && clase=="botonMalo"){
        alert("Has ganado")
        window.location.reload()
    }
  }
}


empezar.addEventListener("click",function(){
    generar()
    recorrerDivs("generador")
    empezar.hidden=true
})



recorrerDivs("generador")