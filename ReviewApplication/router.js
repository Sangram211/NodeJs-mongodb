function route(pathMap,pathParam,response,reviewData){
	console.log("this is inside route method router" + pathParam) ;
	if(typeof pathMap[pathParam] === 'function'){
		pathMap[pathParam](response,reviewData);
	}
	else {
		console.log("no url");
		response.writeHead(404,{"Content-Type" : "text/plain"});
		response.write("no url found to redirect");
		response.end();

	}
}


exports.route = route;
