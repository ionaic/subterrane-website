// use $ to select elements by id 
var $ = function(id) {return document.getElementById(id);};

// use $$ to select elements by class name
var $$ = function(id) {return document.getElementsByClassName(id);};

function popup(desiredID) {
    popdown();
	var shown_elements = $$('popup');
	for (var i = 0; i < shown_elements.length; i++) {
		shown_elements[i].className='popdown';
	}
	$('popup-container').className="popup";
	$(desiredID).className='popup';
}

function popdown() {
	var shown_elements = $$('popup');
	for (var i = 0; i < shown_elements.length; i++) {
		shown_elements[i].className='popdown';
	}
	$('popup-container').className="popdown";
}
