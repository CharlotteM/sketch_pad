var size = 16;

$(document).ready(function() {

	buildGrid(size);
	defaultColor();	
	
	$("#clear").click(function() {
		clear();
	});
	
	$("#random").click(function() {
		clear();
		$(".squares").hover(function() {
			$(this).css("background-color", randomColor());
		});
	});
	
	$("#rows").click(function() {
		checkSize();
		$(".squares").remove();
		buildGrid(size);
		defaultColor();
	});
	
	$("#original").click(function() {
		$(".squares").remove();
		buildGrid(16);
		defaultColor();
	});
	
});

function buildGrid(size) {
	var squareSize = 960 / size - 2; 
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			$("#container").append("<div class='squares'></div>");
		};
	$("#container").append("<div class='more_squares'></div>");
	};
	$(".squares").css("width", squareSize);
	$(".squares").css("height", squareSize);
};

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + "," + green + "," + blue + ")";
};

function clear() {
	$(".squares").css("background-color", "white");
};

function defaultColor() {
	$(".squares").hover(function() {
		$(this).css("background-color", "#3333b5");
	});
};

function checkSize() {
	var newSize = prompt("How many rows and columns would you like? Choose a number between 1 and 64.");
	if (newSize >= 1 && newSize <= 64) {
		size = newSize;
	} else {
		checkSize();
	}
};

	
	


		
		
