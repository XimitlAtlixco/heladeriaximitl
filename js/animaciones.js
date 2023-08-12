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


