(function(window, factory) {
	var myModule = factory(window, window.document);

	if(typeof module == 'object' && module.exports){
		module.exports = myModule;
	}
}(typeof window != 'undefined' ? window : this , function(window, document) {
	'use strict';
	var dom = window.jQuery || window.dom;

	const DEFAULTS = {};

	class Boilerplate extends rbLife.Widget {
		constructor(element){

			super(element);

			this.element = element;
			this.$element = dom(element);
		}
	}

	Boilerplate.defaults = DEFAULTS;

	rbLife.register('boilerplate', Boilerplate);
	return Boilerplate;
}));
