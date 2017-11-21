var http = require('http');
var url=require('url');

function startServer(route,pathMap){

	function serverrequest(request,response){
		var pathparam=url.parse(request.url).pathname;
		var reviewData="";
		
		console.log("inside create server");
		request.setEncoding("utf8");
		request.addListener("data", function(chunk){
			reviewData += chunk;
		});

		request.addListener("end",function(){
			route(pathMap,pathparam,response,reviewData);
		});
		
		
	}

	http.createServer(serverrequest).listen(8888);
	console.log("server started on 8888");

}

exports.startServer = startServer;