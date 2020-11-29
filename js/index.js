$(document).ready(function() {
	$('#pagepiling').pagepiling( { 		
		onLeave: function(index, nextIndex, direction){
if(index == 1){
	document.querySelector(".header") .classList.add("header__section2")
	console.log("сработало")

}

if(index == 2){
	document.querySelector(".header") .classList.remove("header__section2")
	console.log("сработало")
}
	}});

});