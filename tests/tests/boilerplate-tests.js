(function(){
	'use strict';
	QUnit.module('boilerplate');

	QUnit.testStart(function(obj){
		if(obj.module != 'boilerplate'){return;}
		rb.$('#qunit-fixture').html('<div class="rb-boilerplate js-rb-life" data-module="boilerplate"></div>');
	});

	QUnit.test("boilerplate.init", function( assert ){
		//rb.$('#qunit-fixture');
		//var widget = rb.$('.rb-boilerplate').rbComponent();
		//assert.ok(typeof widget.init == 'function');

	});
})();
