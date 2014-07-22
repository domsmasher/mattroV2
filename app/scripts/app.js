//http://api.metro.co.uk/commercial-feed/?path=home&number=10&page=1
'use strict';
var app = (function () {
	var initModule = function ($container) {
		console.log('This is my container', $container, app);
		app.shell.initModule($container);
	};
	return { initModule: initModule };
}());



