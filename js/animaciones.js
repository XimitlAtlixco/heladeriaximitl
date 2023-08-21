import anime from '../node_modules/animejs/lib/anime.es.js';

var list
var listItem
var x=0
var fondo
var acumuladoMargin=0
var list_menu1=document.getElementsById('menu-list1');
var list_menu2=document.getElementsById('menu-list2');


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
    acumuladoMargin=0
}

console.log(listItem)

list_menu1.mouseover=anime({
    targets:list_menu1,
    scale:1.2,
    duration:750
})

list_menu2.onmouseover=anime({
    targets:list_menu2,
    scale:1.2,
    duration:750
})



setInterval(()=>{
if(x!=listItem.length-1){
    acumuladoMargin=acumuladoMargin+listItem[x].clientWidth

    list.style.transform='translateX(-'+acumuladoMargin+'px)'
    x++
}
else{
    list.style.transform='translateX(-'+acumuladoMargin+'px)'
    regresar()
}
},5000)

