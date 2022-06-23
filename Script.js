

function Calculator(NewValue){
	document.getElementById("myResult").value += NewValue;
}


function Answer(){
	var a = document.getElementById("myResult").value;
	var b = eval(a);
	document.getElementById("myResult").value = b;
}


function DeletMe(){
	document.getElementById("myResult").value = "";
}
