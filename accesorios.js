var cadena;
var lentes;
var sombrero;

const init = function(pro){
    with (pro) {
        size(500,500);
        frameRate(600);
        background(226, 250, 220);
    }
};

function drawAfter(pro,callback){
    cadena = pro.loadImage("cadena.png");
    lentes = pro.loadImage("lentes.png");
    sombrero = pro.loadImage("sombrero.png");
    setInterval(() => {
        callback(cadena,25 ,100, 150, 150)
        callback(lentes,250, 120, 160, 160)
    	callback(sombrero,200,250,150,150)},300);}


var sketchProc = function(processingInstance){
	with(processingInstance){
       init(processingInstance)
        drawAfter(processingInstance, image);
		fill(245, 0, 61);
		textSize(25);
		var f=createFont("fantasy");
		textFont(f);
		text("\t\t\t\t\t\t\t\t\t\t\t ACCESORIOS  ZURITA!", 10, 30);
		fill(184, 55, 204);
		textSize(13);
		text("TENEMOS PARA TI COLLARES, SOMBREROS Y LENTES PERSONALIZADOS",9,69);
		fill(190, 105, 219);
		textSize(20);
		text("\n\n\n\n\t\t\t\t\t\t QUIERES TENER ESTILO Y VERTE BIEN \n\t\t\t\t\t\tACCESORIOS  ZURITA ES PARA TI!!", 6, 328);
		fill(12, 43, 242);
    }
};
var canvas = document.getElementById("mycanvas");
var processing = new Processing(canvas, sketchProc);