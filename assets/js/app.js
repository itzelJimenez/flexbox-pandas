//Imágenes
var x=document.getElementsByClassName("x");
var imagenes=document.getElementsByClassName("img");
//botones
var buttOrign=document.getElementById("orign");
var buttExtcn=document.getElementById("extcn");
var buttRestr=document.getElementById("restr");
//textos
var origen=document.getElementById("origen");
var extincion=document.getElementById("extincion");
//contador
var click=1;
//Funcionalidad Etiquetas de cierre de imágenes
for(var i=0;i<x.length;i++){
	x[i].addEventListener("click", eliminar)
}
function eliminar(){
	this.nextElementSibling.style.visibility="hidden";
	this.style.display="none"
}
function restr(){
	for(var i=0; i<imagenes.length;i++){
		imagenes[i].style.visibility="initial";
		imagenes[i].previousElementSibling.style.display="block";
	}
}

function mostrarOrign(){
	if(click==1){
		origen.style.visibility="hidden";
		click=click+1;
	}else{
		origen.style.visibility="initial";
		click=1;
	}
}
function mostrarExtcn(){
	if(click==1){
		extincion.style.visibility="hidden";
		click=click+1;
	}else{
		extincion.style.visibility="initial";
		click=1;
	}
}

buttRestr.addEventListener("click", restr);
buttOrign.addEventListener("click", mostrarOrign);
buttExtcn.addEventListener("click", mostrarExtcn);