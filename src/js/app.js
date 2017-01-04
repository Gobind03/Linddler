(function() {
	
	// Base template
	var base_tpl =
			"<!doctype html>\n" +
			"<html>\n\t" +
      "<head>\n\t\t" +
      "<meta charset=\"utf-8\">\n\t\t" +
      "<title>Test</title>\n\n\t\t\n\t" +
      "</head>\n\t" +
      "<body>\n\t\n\t" +
      "</body>\n" +
      "</html>";
	
	var prepareSource = function() {
		var html = $("#html").val(),
				css = $("#CSS").val(),
				js = $("#Javascript").val(),
				src = '';
		
		// HTML
		src = base_tpl.replace('</body>', html + '</body>');
		
		// CSS
		css = '<style>' + css + '</style>';
		src = src.replace('</head>', css + '</head>');
		
		// Javascript
		js = '<script>' + js + '<\/script>';
		src = src.replace('</body>', js + '</body>');
		//alert(src);
		//$("#output").load('code.html');
		return src;
	};
	
	var render = function() {
		var source = prepareSource();
		//frames['Output'].document.documentElement.innerHTML = x;
		var jetpack = require('fs-jetpack');
		jetpack.write('src/test.html', source);
		$("#Output").attr('src', 'test.html');
		
	};
	
	
$(document).keypress("e",function(e) {
  if(e.ctrlKey)
  	render();
})

// $("#btn").on('click', function(){
//   render();  
// })			
}());
