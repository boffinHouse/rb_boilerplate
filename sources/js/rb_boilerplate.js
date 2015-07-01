(function(factory) {
	if(typeof define === 'function' && define.amd){
		define(factory);
	}
	else if(typeof module == 'object' && module.exports){
		module.exports = factory();
	} else {
		factory();
	}
}( function() {
	'use strict';
	var dom = window.jQuery || window.dom;

	return rbLife.Widget.extend('boilerplate', {
		defaults: {},
		init: function(element){
			this._super(element);
			this.$element = dom(element);

			console.log(this.element, this.options);
		},
	});
}));
