var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);

(function() {

	'use strict';
	app.init();

})();

var sezioni = new Array("intro",'sez1','sez2','sez3','sez4');
var sezIndex = 0;

$(document).ready(function () {
	$("#entrasimbolo").click(function () {

		$("html, body").animate(
				{ scrollTop: $("#sez1").position().top },
				{  duration: 1300,
					complete: function() {							
							sezIndex ++;
						console.log("prossima sezione" +  sezIndex);
						} 
				}
		);
	});
});