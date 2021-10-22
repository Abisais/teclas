var teclas = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40 
} 

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
dibujarLinea("red", 149, 149, 151, 151, papel);


function dibujarLinea(color, xo, yo, xf, yf, lienzo){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth=2;
	lienzo.moveTo(xo,yo);
	lienzo.lineTo(xf,yf);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento){
	var colorcito = "green";
	var movimiento = 10;
	switch(evento.keyCode){
		case (teclas.LEFT):
			dibujarLinea(colorcito, x, y, x - movimiento, y , papel );
			x = x - movimiento;
			break;

		case(teclas.UP):
			dibujarLinea(colorcito, x, y, x, y - movimiento, papel );
			y = y - movimiento;
			break;

		case(teclas.RIGHT):
			dibujarLinea(colorcito, x, y, x + movimiento, y , papel );
			x = x + movimiento;
			break;

		case(teclas.DOWN):
			dibujarLinea(colorcito, x, y, x, y + movimiento, papel );
			y = y + movimiento;
			break;

		default:
			console.log("otra tecla");
	}
}
