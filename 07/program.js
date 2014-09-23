var http =  require('http');
http.get(process.argv[2] , function(res){
	res.setEncoding('utf8');
	res.on('data' , function(data){
		console.log(data);
	});
}).on('error' , function(e){
	console.error(e.message);
});