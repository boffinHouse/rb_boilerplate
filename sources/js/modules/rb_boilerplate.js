( function() {
	'use strict';
	/* jshint eqnull: true */
	var rb = window.rb;
	var $ = rb.$;

	return rb.life.Widget.extend('boilerplate', {
		defaults: {},

		/* init use init to construct/prepare your widget, but organize your read/write cycles (start layout reads in init and write to DOM in initWrite)*/
		init: function(element){
			this._super(element);

			console.log(this.element, this.$element, this.options);
		},

		/* initWrite is invoked after init and is optimized for DOM writes */
		initWrite: function(){

		},

		/*
		onceAttached is invoked in the same cycle as init, but after all other current widgets are also initialized
		use for tight dependencies between different widgets
		*/
		onceAttached: function(){

		},

		setOption: function(name, value){
			this._super(name, value);
		},

		/*
		 attached/detached are invoked every time the widget element is inserted or removed from the document.
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
