

var list
var listItem
var x=0
var fondo
var acumuladoMargin=0




var list
var listItem
var x=0

function cargar(){
     list=document.getElementById("slider-ul")
     listItem=document.getElementsByClassName("classListSlider");
     console.log(listItem[0].clientWidth)
}
document.addEventListener("DOMContentLoaded",cargar())


function regresar(){
    list.style.transform='translateX(0px)'
    x=0
    acumuladoMargin=0
}

setInterval(()=>{
    if(x!=listItem.length-1){
        acumuladoMargin=acumuladoMargin+listItem[x].clientWidth
    
        list.style.transform='translateX(-'+acumuladoMargin+'px)'
        x++
        console.log(acumuladoMargin);
    }
    else{
        list.style.transform='translateX(-'+acumuladoMargin+'px)'
        regresar()
    }
    },8000)




//
