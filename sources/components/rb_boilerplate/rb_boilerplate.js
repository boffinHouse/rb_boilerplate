( function() {
	'use strict';
	/* jshint eqnull: true */
	var rb = window.rb;
	var $ = rb.$;


	rb.Component.extend('boilerplate',
		/** @lends rb.components.boilerplate.prototype */
		{

			/**
			 * @static
			 * @mixes rb.Component.prototype.defaults
			 * @property {Object} defaults
			 * //@property {Boolean} defaults.debug=true Log debug messages
			 */
			defaults: {
				debug: true,
			},
			/* use init to construct/prepare/create your component, but organize your read/write cycles (start layout reads in init and write to DOM using rb.rAF (see _writeLayout))*/
			/**
			 * @constructs
			 * @classdesc Class component to create a boilerplate.
			 * @name rb.components.boilerplate
			 * @extends rb.Component
			 * @fires boilerplate#changed
			 * @param {Element} element
			 * @example
			 * <div class="rb-boilerplate js-rb-life" data-module="boilerplate">
			 *     <div></div>
			 * </div>
			 * @example
			 * rb.$('.rb-boilerplate').rbComponent();
			 */
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
			 attached/detached are invoked every time the component element is inserted or removed from the document.
			 use to bind/unbind global events (resize/scroll) or timers.
			 but only use if really needed (+ not suitable for components, that have a lot of instances (100+) on one page at the same time):
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
		}
	);
})();
