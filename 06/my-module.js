module.exports = function (dir , type , callback) {
	var fs = require('fs');
	var path = require('path');
	fs.readdir(dir , function(err , list) {		
		if(err) return callback(err);
		var files = [];
		list.forEach(function(f){
			if( path.extname(f) == '.'+type )
				files.push(f);
		});
		return callback(err , files);
	});
};