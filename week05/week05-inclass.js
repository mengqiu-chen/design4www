var v1 = Math.floor(Math.random()*100);
var v2 = Math.floor(Math.random()*100);


//insert them into the algorithm

document.getElementById("num1").innerHTML = v1;
document.getElementById("num2").innerHTML = v2;



var total = document.getElementById("sum").value;


//button-check the answer
document.getElementById("checkAnswer").addEventListener("click", check);

function check(){
	if (total == v1 + v2){
		alert("Got the right answer!");
	} else {
		alert("Wrong number.");
	}

}


//button-next problem
document.getElementById("nextProblem").addEventListener("click", next);

function next(){

}