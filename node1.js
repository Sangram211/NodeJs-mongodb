// function myfunction(stuff){
// 	console.log(stuff);
// }

 var myfunction =function (stuff){
	console.log(stuff);
}
function mainfunction(somefun, value){  //passing a function as a parameter to a function
	somefun(value);
}

mainfunction(myfunction,"function2") //we call the function name or variable assigned to a function

mainfunction(function (stuff){ console.log(stuff);},"anonymous fun") // anonymous function