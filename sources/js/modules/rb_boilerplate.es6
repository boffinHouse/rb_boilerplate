( function() {
	'use strict';
	/* jshint eqnull: true */
	var rb = window.rb;
	var $ = rb.$;

	class Boilerplate extends rb.Component {
		static get defaults(){
			return {
				debug: true,
			};
		}
		/* use to construct/prepare/create your component, but organize your read/write cycles (start layout reads in constructor and write to DOM using rb.rAF (see _writeLayout))*/
		constructor(element){
			super(element);

			this.log(this.element, this.$element, this.options, this);

			//this._writeLayout = rb.rAF(this._writeLayout, {that: this});

			//trigger events
			//this._trigger();
		}

		/* events simple event bindings with event delegation */
		static get events(){
			return {
				//'click .{name}-btn': 'methodName',
				//'click .{name}-btn': function(e){
				//	this.log(this);
				//},
			};
		}

		setOption(name, value){
			super.setOption(name, value);
		}

		/*
		 attached/detached are invoked every time the component element is inserted or removed from the document.
		 use to bind/unbind global events (resize/scroll) or timers.
		 but only use if really needed (+ not suitable for components, that have a lot of instances (100+) on one page at the same time):
		 the pure existence of one of thesse callback methods can slow down 'remove' performance
		 */
		//attached(){
		//
		//}

		//detached(){
		//
		//}
	}

	rb.life.register('boilerplate', Boilerplate);
})();
