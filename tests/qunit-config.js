(function(){
	'use strict';
	var fixtureHTML = document.getElementById('qunit-fixture').innerHTML;

	QUnit.begin(function(){
		rb.life.init();
	});

	QUnit.testDone(function() {
		//document.getElementById('qunit-fixture').innerHTML = fixtureHTML;
	});

	QUnit.config.urlConfig.push({
		id: "jqueryinsteadrb",
		label: "jQuery instead of rb.$",
		tooltip: "Test with latest jQuery instead of rawblocks own dom helper."
	});
})();
