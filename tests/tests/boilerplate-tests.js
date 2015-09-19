(function(){
	'use strict';
	QUnit.module('boilerplate');

	QUnit.test("boilerplate.init", function( assert ){
		var widget = rb.$('.rb-boilerplate').rbWidget();
		assert.ok(typeof widget.init == 'function');
	});
})();
