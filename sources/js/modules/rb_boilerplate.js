( function() {
	'use strict';
	/* jshint eqnull: true */
	var rb = window.rb;
	var $ = rb.$;

	var Boilerplate = rb.Widget.extend('boilerplate', {
		defaults: {
			debug: true,
		},

		/* use init to construct/prepare/create your widget, but organize your read/write cycles (start layout reads in init and write to DOM using rb.rAF (see _writeLayout))*/
		init: function(element){
			this._super(element);

			this.log(this.element, this.$element, this.options, this);

			//this._writeLayout = rb.rAF(this._writeLayout, {that: this});

			//trigger events
			//this._trigger();
		},
		/* events simple event bindings with event delegation */
		events: {
			//'click .{name}-btn': 'methodName',
			//'click .{name}-btn': function(e){
			//	this.log(this);
			//},
		},
		/* statics can reached over Boilerplate.regFoo */
		statics: {
			//regFoo: /foo/g
		},
		setOption: function(name, value){
			this._super(name, value);
		},

		/*
		 attached/detached are invoked every time the widget element is inserted or removed from the document.
		 use to bind/unbind global events (resize/scroll) or timers.
		 but only use if really needed (+ not suitable for widgets, that have a lot of instances (100+) on one page at the same time):
		 the pure existence of one of this callback methods can slow down 'remove' performance
		 */
		//attached: function(){
		//
		//},

		//detached: function(){
		//
		//},
		/* you can use getters/setters */
		//get yourGetter(){
		//
		//},
		//set yourSetter(value){
		//
		//}
	});
})();
