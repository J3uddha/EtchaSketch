var userInput = 4;
var pixelSize = 125;

$(document).ready(function(){
	gridIt();
});

//Button click
function reset() {
	userInput = prompt("Enter Grid #");
	if (userInput != null) {
		$('.container').empty();
		pixelSize = $(".container").width() / userInput;
		gridIt();
	}
}

//Create Divs
function gridIt() { 
for(i=1; i<=(userInput*userInput); i++){
	var drawColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	$('<div />').addClass('pixel').attr('id',i).css({'height': pixelSize, 'width': pixelSize, 'background-color': drawColor, opacity: '0'}).appendTo('.container');
}
$('.pixel').mouseenter(function(){
	$(this).css('opacity', '+=0.25');
	});
}
