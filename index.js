window.onload = function() {
    resizeHeader()
};

window.onresize = function() {
	resizeHeader()
	
}

function resizeHeader() {
	let header = document.getElementsByTagName("header")[0];
	var screenHeight = 450;
	
	if (window.innerHeight > 450) 
		screenHeight = window.innerHeight;
    
    document.getElementsByTagName("header")[0].style.height = screenHeight+"px";
    document.getElementById("header_background_color_overlay").style.height = screenHeight+"px";
    
}