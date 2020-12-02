
$(document).ready(function() {
	$('#pagepiling').pagepiling( { 		
		onLeave: function(index, nextIndex, direction){
if(index == 1 && direction =='down'){
	document.querySelector(".header") .classList.add("header__section2")
	console.log("сработало")

}

if(index == 2 && direction =='up'){
	document.querySelector(".header") .classList.remove("header__section2")
	console.log("сработало")
}

if(index == 2 && direction =='down'){
	document.querySelector(".header") .classList.remove("header__section2")
	console.log("сработало")

}

if(index == 3 && direction =='up'){
	document.querySelector(".header") .classList.add("header__section2")
	console.log("сработало")

}


if(index == 3 && direction =='down'){
	document.querySelector(".header") .classList.add("header__section2")
	console.log("сработало")

}

if(index == 4 && direction =='up'){
	document.querySelector(".header") .classList.remove("header__section2")
	console.log("сработало")

}
	}});

});