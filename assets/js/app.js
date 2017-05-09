//Imágenes
var x=document.getElementsByClassName("x");
//botones
var buttOrign=document.getElementById("orign");
var buttExtcn=document.getElementById("extcn");
var buttRestr=document.getElementById("restr");
//textos
var origen=document.getElementById("origen");
var extincion=document.getElementById("extincion");

//Funcionalidad Etiquetas de cierre de imágenes
for(var i=0;i<x.length;i++){
	x[i].addEventListener("click", prueba)
}
function prueba(){
	alert("hola");
}