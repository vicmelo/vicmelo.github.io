window.onload = function() {
    resizeHeader()
};

window.onresize = function() {
	resizeHeader()
	
}

function resizeHeader() {
	let header = document.getElementsByTagName("header")[0];
	var screenHeight = 400;
	
	if (window.innerHeight > 400) 
		screenHeight = window.innerHeight;
    
    document.getElementsByTagName("header")[0].style.height = screenHeight+"px";
    document.getElementById("header_background_color_overlay").style.height = screenHeight+"px";
    
}