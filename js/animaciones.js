import anime from '../node_modules/animejs/lib/anime.es.js';

var list
var listItem
var x=0
var fondo

function cargar(){
     list=document.getElementById("slider-ul")
     listItem=document.getElementsByClassName("classListSlider");
     console.log(listItem[0].clientWidth)
     fondo=document.getElementsByTagName("body");
}
document.addEventListener("DOMContentLoaded",cargar())
 console.log(fondo);

function regresar(){
    list.style.transform='translateX(0px)'
    x=0
}



setInterval(()=>{
if(x!=listItem.length-1){
    list.style.transform='translateX(-'+listItem[x].clientWidth+'px)'
    x++
}
else{
    regresar()
}
},5000)

