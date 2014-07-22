'use strict';
app.shell = (function () {
	var configMap = {},
	    stateMap = {
		$container: undefined
	    },
	    jQueryMap = {},
	    setJqueryMap,
	    onResize,
	    onHashChange,
	    initModule;
		
	onResize = function () {
		console.log('I\'m resizing');
	};

	onHashChange = function () {
		console.log('Hash is changed');
	};

	setJqueryMap = function (){
		var $container = stateMap.$container;
		jQueryMap = {$container: $container};
	};

	initModule = function ($container) {
		stateMap.$continer = $container;
		setJqueryMap();
		$(window)
			.on('resize', onResize)
			.on('hashchange', onHashChange)
			.trigger('hashchange');
	};
	return {
		initModule: initModule
	};
} ());

