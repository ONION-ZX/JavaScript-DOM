//创建moveElement函数
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
