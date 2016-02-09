function sum(){
	var operacion = document.getElementById("op").innerHTML;
	var numeros = operacion.split("+");
	var resultado = parseInt(numeros[0]) + parseInt(numeros[1]);
	document.getElementById("res").innerHTML = "= " + resultado;
}
function rnd_num(){
	document.getElementById("res").innerHTML = "";
	var operandos = document.getElementById("op");
	operandos.innerHTML = Math.floor(Math.random()*9) + "+" + Math.floor(Math.random()*9);
}
