// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	var g = 1;
	var incremento1 = 0;
	var incremento2 = 0;
	var incremento3 = 0;
	var incremento4 = 0;
	
	$('#uno').on('click', function(){
		incremento1 = incremento1 + g
		$('#resultado1').text(incremento1)
		});
	
	$('#dos').on ('click', function(){
		incremento2 = incremento2 + g;
		$('#resultado2').text(incremento2)
	});
	
	$('#tres').on ('click', function(){
		incremento3 = incremento3 + g;
		$('#resultado3').text(incremento3)
	});
	
	$('#cuatro').on ('click', function(){
		incremento4 = incremento4 + g;
		$('#resultado4').text(incremento4)
	});
		 
//}); 
});


