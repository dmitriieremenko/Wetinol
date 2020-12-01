$(function(){

	$(document).on('focus', '.input-text-wrap input, .input-text-wrap textarea', ({target})=>{
	  $(target).closest('.input-text-wrap').addClass('active');
	});
	$(document).on('blur', '.input-text-wrap input, .input-text-wrap textarea', ({target})=>{
	  if(!target.value.length)
	  $(target).closest('.input-text-wrap').removeClass('active');
	});
  
  })


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