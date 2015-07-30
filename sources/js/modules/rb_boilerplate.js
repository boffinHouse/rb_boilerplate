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
	var dom = window.rb.$;

	return rbLife.Widget.extend('boilerplate', {
		defaults: {},
		init: function(element){
			this._super(element);

			console.log(this.element, this.options);
		},
		onceAttached: function(){

		},
		setOption: function(name, value){
			this._super(name, value);
		},
		/*
		attached: function(){

		},
		*/
		/*
		detached: function(){

		},
		*/
	});
}));
