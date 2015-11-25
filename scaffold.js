var readline = require('readline');
var fs = require('fs');
var glob = require('glob');

var options = {
	js: true
};
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var write = function(file){
	fs.readFile(file, 'utf8', function(err, data) {
		if (err) {
			return console.log(err);
		}
		var result = data.replace(/boilerplate/g, options.name).replace(/Boilerplate/g, options.upperCaseName);

		fs.writeFile(file, result, 'utf8', function (err) {
			var newName;
			if(err){
				console.log(err);
				return;
			}


			newName = file.replace(/boilerplate/g, options.name).replace(/Boilerplate/g, options.upperCaseName);
			if(file != newName){
				fs.rename(file, newName, function(er){
					if(er){
						console.log(er)
					}
				});
			}
		});
	});
};

var writeAll = function() {
	var componentSrc = 'sources/components/'
	var boilerplateDir = componentSrc + 'rb_boilerplate';

	if(fs.existsSync(boilerplateDir)) {
		fs.renameSync(boilerplateDir, componentSrc + 'rb_' + options.name);
	}

	glob('!(node_modules|dist)/**/*{json,hbs,scss,es6,js,html}', function(err, files) {
		if(err) {
			console.log(err);
		}

		files.push('README.md', 'package.json');

		files.forEach(write);
	});

};

rl.question('Name of your project: ', function(name) {
	options.name = name;
	options.upperCaseName = options.name.charAt(0).toUpperCase() + options.name.substr(1);

	writeAll();
	rl.close();
});
