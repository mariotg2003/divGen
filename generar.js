let generador=document.getElementById("generador")
let puntuacion=document.getElementById("puntuacion")
let empezar=document.getElementById("botonEmpezar")
let bolas=0
let randomBola
let puntos = 0


let nombre = localStorage.getItem("nombre")

if(nombre==null){
  window.location.href="index.html"
}


function generar(){
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
    
    if(divs.length==1 && clase=="botonMalo" && nombre!=null){
        alert("Has perdido!")
        let nombreUsuario=nombre
        usuario={"nombre":nombreUsuario,"puntos":puntos}

        if (localStorage.getItem("nombres") == null) {
            let nombres = [];
            nombres.push(usuario);
            ArrayNombre = JSON.stringify(nombres);
            localStorage.setItem("nombres", ArrayNombre);
        } else {
            ArrayNombre = JSON.parse(localStorage.getItem("nombres"));
            console.log(ArrayNombre)
            let esta=false;
            for (const usuario in ArrayNombre) {
              if (ArrayNombre[usuario]["nombre"] === nombreUsuario) {
                ArrayNombre[usuario]["puntos"]=puntos;
                esta=true
                break;
              }
            }

            if(!esta){
              ArrayNombre.push(usuario);
            }
            
            localStorage.setItem("nombres", JSON.stringify(ArrayNombre));
        }

        window.location.href = "puntuacion.html";
    }else if(nombre==null){
      alert("No hay nombre")
    }
    
  }
}


empezar.addEventListener("click",function(){
    generar()
    recorrerDivs("generador")
    empezar.hidden=true
})



recorrerDivs("generador")