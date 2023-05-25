let tabla=document.getElementById("puntuacionTabla")
let botonVolver=document.getElementById("botonVolver")
let cambiarJugador=document.getElementById("cambiarJugador")

function recogerNombres(){

    let nombres=localStorage.getItem("nombres")

    if(nombres!=null){
       arrayNombres=JSON.parse(nombres)

        arrayNombres.forEach(element => {

            let filaNueva=document.createElement("tr")

            filaNueva=`<tr>
                        <td>`+element["nombre"]+`</td>
                        <td>`+element["puntos"]+`</td>
                    </tr>`

            tabla.innerHTML+=filaNueva
        }); 
    }
}


botonVolver.addEventListener("click",function(){
    window.location.href = "juego.html";
})

cambiarJugador.addEventListener("click",function(){
    window.location.href = "index.html";
})

recogerNombres()