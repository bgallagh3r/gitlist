$(function () {
    $('.dropdown-toggle').dropdown();

    if ($('#sourcecode').length) {
    	var mode = $('#sourcecode').attr('language');
	    CodeMirror.fromTextArea(document.getElementById("sourcecode"), {
	        lineNumbers: true,
	        matchBrackets: true,
	        lineWrapping: true,
	        readOnly: true,
	        mode: mode
	    });
	};
});