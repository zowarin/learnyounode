var m_filer = require('./my-module.js');
var dir = process.argv[2];
var type = process.argv[3];

m_filer(dir , type , function(err , list){
	if(err) return console.log(err);
	list.forEach(function(f){ console.log(f);});
});