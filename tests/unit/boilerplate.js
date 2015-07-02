define([
	'intern!object',
	'intern/chai!expect',
	'intern/order!component-helpers/js/object-assign',
	'intern/order!https://boffinhouse.github.io/rawblock/sources/js/libs/rb-life.js',
	'intern/order!https://boffinhouse.github.io/rawblock/sources/js/libs/dom.js',
	'intern/order!sources/js/rb_boilerplate',
], function(registerSuite, expect) {
	var widgetElement, widget;

	registerSuite({
		name: 'boilerplate tests',
		setup: function () {},
		teardown: function () {},
		beforeEach: function () {
			widgetElement = document.createElement('div');
			document.body.appendChild(widgetElement);

			widget = rbLife.create(widgetElement, rbLife._behaviors.boilerplate);
		},
		afterEach: function () {},

		'basic tests': function() {
			expect(rbLife._behaviors.boilerplate, '').to.exist;
		},

	});
});
