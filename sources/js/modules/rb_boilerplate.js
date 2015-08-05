( function() {
	'use strict';
	var rb = window.rb;
	var $ = rb.$;

	return rb.life.Widget.extend('boilerplate', {
		defaults: {},

		init: function(element){
			this._super(element);

			console.log(this.element, this.options);
		},
		/*
		onceAttached is invoked in the same cycle as init, but after all other current widgets are also initialized
		use for tight dependencies between different widgets or to organize read/write cycles (start reads in init and write in onceAttached)
		*/
		onceAttached: function(){

		},
		setOption: function(name, value){
			this._super(name, value);
		},
		/*
		 attached/detached are invoked everytime an element is inserted or removed from the document.
		 example use to bind/unbind global events (resize/scroll) or timers.
		 but only use if really needed (+ not suitable for widgets, that can a lot of instances (30+) on one page at the same time):
		 the pure existence of one of this callback methods can slow down 'remove' performance
		 */
		/*
		attached: function(){

		},
		*/
		/*
		detached: function(){

		},
		*/
	});
})();
