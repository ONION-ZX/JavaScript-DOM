function positionMessage(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50 px";
	elem.style.top = "100px";
}
window.onload = positionMessage;

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function'){
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function moveMessage() {
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.left = "200px";
}

addLoadEvent(positionMessage);
addLoadEvent(moveMessage);

//创造时间间隔
variable = setTimeout("function", interval);
clearTimeOut(variable);
function positionMessage() {
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	//全局变量
	movement = setTimeout("moveMessage()",5000);
}

addLoadEvent(positionMessage);
clearTimeOut(movement);

//获得元素的当前位置
var xpos = parseInt(elem.style.left);
var ypos = parseInt(elem.style.top);

if(xpos == 200 && ypos == 100) {
	return true;
}
if(xpos<200) {
	xpos++;
}
if(xpos>200) {
	xpos--;
}
if(ypos<100) {
	ypos++;
}
if(ypos>100) {
	ypos--;
}
elem.style.left = xpos + "px";
elem.style.left = ypos + "px";

movement = setTimeout("moveMessage()",10);

function moveMessage() {
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = getElementById("message");
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos == 200 && ypos==100) {
		return true;
	}
	if (xpos < 200) {
		xpos++;
	}
	if (xpos > 200) {
		xpos--;
	}
	if (ypos <100) {
		ypos++;
	}
	if (ypos >100) {
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	movement = setTimeout("moveMessage()",10);
}

//将常数改为变量 函数的灵活性和使用范围大大提高
//创建moveElement函数
//参数及名称
//打算移动的元素ID elementID;该元素目的地的"左"位置 final_x;
//该元素目的地的"上"位置 final_y;两次移动之间的停顿时间 interval;

function moveElement(elementID,final_x,final_y,interval) {
	if(!document.getElementById) return false;
	if(!document,getElementById(elementID)) return false;
	//elem变量对应想要移动的任何变量
	var elem = getElementById(elementID);
	var xpos = parseInt(style.elem.left);
	var ypos = parseInt(style.elem.top);
	if (xpos = final_x && ypos = final_y){
		return true;
	}
	if (xpos < final_x) {
		xpos++;
	}
	if (xpos > final_x) {
		xpos--;
	}
	if (ypos < final_y) {
		ypos++;
	}
	if (ypos > final_y) {
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos +"px";
	movement = setTimeout("moveMessage()",10);
}

var repeat = "moveElement('"+elementID+","+final_x+","+final_y+","+interval+"')";
movement = setTimeout(repeat,interval);

function moveElement(elementID,final_x,final_y,interval) {
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos ==final_y) {
		return true;
	}
	if(xpos<final_x) {
		xpos++;
	}
	if(xpos>final_x) {
		xpos--;
	}
	if(ypos<final_y) {
		ypos++;
	}
	if(ypos>final_y) {
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement("'+elementID+','+final_x+','+final_y+','+interval+'")";
	movement = setTimeout('repeat',10);
}
